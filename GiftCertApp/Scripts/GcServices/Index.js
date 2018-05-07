import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import style from './Components/style'
import GcService from './Components/GcService'

import AddGcServiceModal from 'AddGcServiceModal'
import * as addGcServiceModalActions from 'AddGcServiceModal/Actions'

import AddLotModal from 'AddLotModal'
import RemoveDeviceConfirmation from 'RemoveDeviceConfirmation'
import RemoveLotConfirmation from 'RemoveLotConfirmation'

export class GcServices extends React.Component {

  constructor() {
    super()
    this.onNewDevice = this.onNewDevice.bind(this)
  }

  onNewDevice(e) {
    e.preventDefault();
    this.props.openModal();
  }

  render() {
    const showButton = !this.props.limitDevices || this.props.devices.count() < 1
    style.mainAction.display =showButton ? 'block' : 'none';

    return (<div>
         <div className="alert alert-danger" role="alert">
           <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
           <span className="sr-only">Error: </span>
           &nbsp;{this.props.deviceConfidentiality}
        </div>
        <div style={style.mainAction}>
          <button className='btn btn-primary' onClick={this.onNewDevice}>
            <i className='fa fa-plus'></i> Add Device
          </button>
        </div>
        <div style={style.deviceHeader}>
          <div style={style.deviceRowHeader}>&nbsp;</div>
          <div style={style.packageTypeHeader}>Package Type</div>
          <div style={style.partNumberHeader}>Part Number</div>
          <div style={style.actionHeader}>&nbsp;</div>
        </div>
        <div style={style.deviceBody}>
          {
            this.props.devices.map((item) => {
              return (
                <Device key={item.get('partNumber')} device={item} requiredLots={this.props.requiredLots}/>
              );
            })
          }
        </div>

        <AddDeviceModal />
        <AddLotModal />
        <RemoveDeviceConfirmation />
        <RemoveLotConfirmation />
      </div>)
  }
}

function mapStateToProps({testRequest}) {
  const requestType = testRequest.get('headerData').get('requestType');
  const deviceConfidentiality = testRequest.get('deviceConfidentiality');
  let limitDevices = true;
  let requiredLots = true;
  if(requestType.get('id') > 0)
  {
    limitDevices = requestType.get('limitDevices')
    requiredLots = requestType.get('requiresLot')
  }

  return {
    devices: testRequest.get('devices'),
    limitDevices: limitDevices,
    requiredLots: requiredLots,
    deviceConfidentiality: deviceConfidentiality
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(addDeviceModalActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Devices)
