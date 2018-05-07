import React, { PropTypes } from 'react'
import { connect } from 'react-redux';
import style from './style'
import Lots from './Lots'

const { object, bool } = PropTypes

import * as addLotModalActions from 'AddLotModal/Actions'
import * as removeDeviceModalActions from 'RemoveDeviceConfirmation/Actions'
import * as removeLotModalActions from 'RemoveLotConfirmation/Actions'

class Device extends React.Component {
  constructor() {
    super()

    this.state = {
      expand: false
    }

    this.onExpandClicked = this.onExpandClicked.bind(this)
    this.onCollapseClicked = this.onCollapseClicked.bind(this)
    this.onRemoveDevice = this.onRemoveDevice.bind(this)
    this.onAddLot = this.onAddLot.bind(this)
    this.onRemoveLot = this.onRemoveLot.bind(this)
  }

  onExpandClicked(e) {
    e.preventDefault();
    this.setState({
      ...this.state,
      expand: true
    });
  }

  onCollapseClicked(e) {
    e.preventDefault();
    this.setState({
      ...this.state,
      expand: false
    });
  }

  onRemoveDevice(e) {
    e.preventDefault();
    this.props.dispatch(removeDeviceModalActions.openModal(this.props.device))
  }

  onAddLot() {
    this.props.dispatch(addLotModalActions.openModal(this.props.device))
  }

  onRemoveLot(lot) {
    this.props.dispatch(removeLotModalActions.openModal({
      device: this.props.device,
      lot: lot
    }))
  }

  render() {
    const lotSectionStyle = {
      marginLeft: '55px',
      display: this.state.expand ? 'block' : 'none'
    }

    const expandStyle = {
      ...style.expandCollapse,
      display: this.state.expand ? 'none' : 'block'
    }

    const collapseStyle = {
      ...style.expandCollapse,
      display: this.state.expand ? 'block' : 'none'
    }

    return (
      <div>
        <div>
          <div style={style.deviceRowHeader}>
            {
              (() => {
                if (this.props.requiredLots) {
                  return (
                    <span>
                      <i className='fa fa-plus' style={expandStyle} onClick={this.onExpandClicked}></i>
                      <i className='fa fa-minus' style={collapseStyle} onClick={this.onCollapseClicked}></i>
                    </span>
                  )
                }
              })()
            }

          </div>
          <div style={style.packageTypeColumn}>{this.props.device.get('packageType').get('name')}</div>
          <div style={style.partNumberColumn}>{this.props.device.get('partNumber')}</div>
          <div style={style.actionColumn}>
            <button className='btn btn-link' onClick={this.onRemoveDevice}>Remove Device</button>
          </div>
        </div>
        {
          (() => {
            if (this.props.requiredLots) {
              return (
                <div style={lotSectionStyle}>
                  <Lots lots={this.props.device.get('lots')}
                    onAddLot={this.onAddLot}
                    onRemoveLot={this.onRemoveLot} />
                </div>
              )
            }
          })()
        }
      </div>
    )
  }
}

Device.propTypes = {
  device: object.isRequired,
  requiredLots: bool.isRequired
}

export default connect()(Device);
