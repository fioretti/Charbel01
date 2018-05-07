import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions  from './Actions'
import BootstrapModal from 'react-bootstrap-modal'

class Modal extends React.Component {

  constructor() {
    super()

    this.onRemoveClicked = this.onRemoveClicked.bind(this)
  }

  onRemoveClicked(e) {
    e.preventDefault();
    const modalData = this.props.modalData;
    const device = modalData.get('device');
    this.props.removeDevice(device);
  }

  render() {
    const modalData = this.props.modalData;
    const device = modalData.get('device');

    return (
      <BootstrapModal show={modalData.get('isOpen')} onHide={this.props.closeModal}>
        <BootstrapModal.Header closeButton>
          <BootstrapModal.Title id='ModalHeader'>Remove Device</BootstrapModal.Title>
        </BootstrapModal.Header>
        <BootstrapModal.Body>
          <p>
            Do you want to remove this device?
          </p>
        </BootstrapModal.Body>
        <BootstrapModal.Footer>
          <BootstrapModal.Dismiss className='btn btn-default'>Cancel</BootstrapModal.Dismiss>
          <button className='btn btn-danger' onClick={this.onRemoveClicked}>Remove</button>
        </BootstrapModal.Footer>
      </BootstrapModal>
    )
  }
}

function mapStateToProps({removeDeviceModal}, props) {
  return {
    modalData: removeDeviceModal
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
