import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classnames from 'classnames';
import * as actions  from './Actions'
import BootstrapModal from 'react-bootstrap-modal'

class Modal extends React.Component {

  constructor() {
    super()

    this.onSearchClick = this.onSearchClick.bind(this)
    this.onAddClicked = this.onAddClicked.bind(this)
    this.onFieldChanged = this.onFieldChanged.bind(this)

    this.onPackageTypeGroupChanged = this.onPackageTypeGroupChanged.bind(this)
    this.onPackageTypeChanged = this.onPackageTypeChanged.bind(this)
  }

  onFieldChanged (name, e) {
    const value = e.target.value;
    this.props.fieldChanged({
      [name]: value
    })
  }

  onPackageTypeGroupChanged(e) {
    const device = this.props.modalData.get('device');

    const newDevice = device.merge({
      packageTypeGroup: {
        id: parseInt(e.target.value),
        name: $('option:selected', e.target).text()
      }
    })

    this.props.fieldChanged({
      device: newDevice
    })
  }

  onPackageTypeChanged(e) {
    const device = this.props.modalData.get('device');

    const newDevice = device.merge({
      packageType: {
        id: parseInt(e.target.value),
        name: $('option:selected', e.target).text()
      }
    })

    this.props.fieldChanged({
      device: newDevice
    })
  }

  onSearchClick(e) {
    e.preventDefault();
    var modalData = this.props.modalData;
    this.props.checkPartNumberAndHandleResult(modalData.get('search'));
  }

  onAddClicked(e) {
    e.preventDefault();
    const device = this.props.modalData.get('device');
    this.props.addDeviceToTestRequest(device);
  }

  render() {
    var modalData = this.props.modalData;

    const packageTypeBaseStyle = {
      display: modalData.get('isFetchingPackageType') ? 'none' : 'inline',
      width: '180px'
    }

    var style = {
      searchSection: {
        paddingBottom: '5px',
      },
      searchControl: {
        marginRight: '10px'
      },
      searchButton: {
        width: '100px'
      },
      deviceEditor: {
        marginTop: '10px',
        paddingTop: '10px',
        borderTop: '1px solid #e5e5e5',
        display: modalData.get('showEditor') ? 'block' : 'none'
      },
      packageGroupType: {
        ...packageTypeBaseStyle,
        marginRight: '8px'
      },
      packageType: {
        ...packageTypeBaseStyle
      },
      searchLoading: {
        display: modalData.get('isSearching') ? 'inline-block' : 'none'
      },
      packageTypeLoading: {
        display: modalData.get('isFetchingPackageType') ? 'inline-block' : 'none'
      }
    }

    const searchButtonClass = classnames('btn', 'btn-default', {
      'disabled': modalData.get('isSearching')
    });

    const addButtonClass = classnames('btn', 'btn-success', {
      'disabled': modalData.get('isSearching')
    });

    let packageTypesDropdownOpts = {}
    let packageTypeGroupsOptionList = []
    let packageTypesOptionList = []

    if (modalData.get('isPartFound')) {
      packageTypesDropdownOpts.disabled = 'disabled'

      const packageTypeGroup = modalData.get('device').get('packageTypeGroup')
      const packageType = modalData.get('device').get('packageType')

      packageTypeGroupsOptionList.push( <option key={packageTypeGroup.get('id')} value={packageTypeGroup.get('id')}>{packageTypeGroup.get('name')}</option>)
      packageTypesOptionList.push(<option key={packageType.get('id')} value={packageType.get('id')}>{packageType.get('name')}</option>)
    } else {
      packageTypeGroupsOptionList.push(<option key='' value=''>Select group</option>)
      modalData.get('packageTypeGroupsData').map((item) => {
        packageTypeGroupsOptionList.push( <option key={item.get('id')} value={item.get('id')}>{item.get('name')}</option>)
      })

      const selectedPackageGroup = modalData.get('device').get('packageTypeGroup');
      packageTypesOptionList.push(<option key='' value=''>Select package</option>)

      if (selectedPackageGroup.get('id') > 0) {
        const group = modalData.get('packageTypeGroupsData')
          .filter((item) => {
            return item.get('id') == selectedPackageGroup.get('id')
          })
          .map((item) => {
            return item
          })

        group.get(0).get('packageTypes').forEach((item) => {
          packageTypesOptionList.push(<option key={item.get('id')} value={item.get('id')}>{item.get('name')}</option>)
        })
      }
    }

    return (
      <BootstrapModal show={modalData.get('isOpen')} onHide={this.props.closeModal}>
        <BootstrapModal.Header closeButton>
          <BootstrapModal.Title id='ModalHeader'>Add Device</BootstrapModal.Title>
        </BootstrapModal.Header>
        <BootstrapModal.Body>
          {
            (() => {
              if (modalData.get('showError')) {
                return (
                  <div className='alert alert-danger'>
                  {modalData.get('errorMessage')}
                  </div>
                )
              }
            })()
          }
          <div style={style.searchSection}>
            <form className='form-inline'>
              <div className='form-group'>
                <label className='control-label' style={style.searchControl}>Part Number</label>
                <input type='text' className='form-control' style={style.searchControl}
                  value={modalData.get('search')} onChange={_.partial(this.onFieldChanged, 'search')}/>
              </div>
              <button className={searchButtonClass} onClick={this.onSearchClick} style={style.searchButton}>
                <i className='fa fa-spinner fa-spin' style={style.searchLoading} /> Search
              </button>
            </form>
          </div>

          <form className='form-horizontal' style={style.deviceEditor}>
            <div className='form-group'>
              <label className='col-xs-4 control-label'>Part Number</label>
              <div className='col-xs-8'>
                <input type='text' className='form-control' value={modalData.get('device').get('partNumber')} disabled/>
              </div>
            </div>
            <div className='form-group'>
              <label className='col-xs-4 control-label'>Package Type</label>
              <div className='col-xs-8'>
                <span className='form-control-static' style={style.packageTypeLoading}>
                  <i className='fa fa-spinner fa-spin'></i>
                </span>
                <select className='form-control' style={style.packageGroupType} {...packageTypesDropdownOpts}
                  onChange={this.onPackageTypeGroupChanged}>
                  {packageTypeGroupsOptionList}
                </select>
                <select className='form-control' style={style.packageType} {...packageTypesDropdownOpts}
                  onChange={this.onPackageTypeChanged}>
                  {packageTypesOptionList}
                </select>
              </div>
            </div>
          </form>
        </BootstrapModal.Body>
        <BootstrapModal.Footer>
          <BootstrapModal.Dismiss className='btn btn-default'>Cancel</BootstrapModal.Dismiss>
          <button className={addButtonClass} onClick={this.onAddClicked}>Add</button>
        </BootstrapModal.Footer>
      </BootstrapModal>
    )
  }
}

function mapStateToProps({addDeviceModal}, props) {
  return {
    modalData: addDeviceModal
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
