import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { DropdownButton, MenuItem  } from 'react-bootstrap';

import GiftCertStatus from 'Commons/GiftCertStatus'
import HumanizeMinutes from 'Commons/HumanizeMinutes'

import * as uiUtils from 'Utils/UiUtils'
import * as actions from '../Actions'
import * as dataUtils from 'Utils/DataUtils'
import GcType from 'Commons/GcType'
import { debug } from 'util';

class GiftCertComponent extends React.Component {
  constructor() {
    super()
    this.onViewClicked = this.onViewClicked.bind(this)
    this.onResubmit = this.onResubmit.bind(this)
    this.onDelete = this.onDelete.bind(this)
    this.onCreateNewForm = this.onCreateNewForm.bind(this)
    this.onModifyClicked = this.onModifyClicked.bind(this)
  }

  onViewClicked(e) {
    e.preventDefault();

    const url = 'Home/ViewDetail/' + this.props.request.get('id');
    uiUtils.openInNewWindow(url);
  }

  onModifyClicked(e) {
    e.preventDefault();
  uiUtils.redirect('TestRequestForm/Index/' + this.props.request.get('id'))
  }

  onResubmit(e) {
    uiUtils.showConfirmationDialog({
      title: 'Re-Submit',
      message: 'Please confirm that you want to re-submit request ' + this.props.request.get('id') + '.',
      onSuccess: (callback) => {
        this.props.dispatch(
          actions.resubmitRequestAndHandle(this.props.request.get('id'), callback)
        );
      }
    })
  }

  onDelete(e) {
    uiUtils.showConfirmationDialog({
      title: 'Delete',
      message: 'Please confirm that you want to delete request '+ this.props.request.get('id') +'. This action cannot be undone.',
      onSuccess: (callback) => {
        this.props.dispatch(
          actions.deleteRequestAndHandle(this.props.request.get('id'), callback)
        );
      }
    })
  }

  onCreateNewForm(e) {
    uiUtils.showConfirmationDialogWithFlag({
      title: 'Create New Form',
      message: 'Please confirm that you want to create a copy of request '+ this.props.request.get('id') +'.',
      flagMessage: 'Keep Test Configuration',
      onSuccess: (checked, callback) => {

        this.props.dispatch(
          actions.createNewForm({
            id: this.props.request.get('id'),
            checked: checked
          }, callback
        ))
      }
    })
  }

  render() {
    const item = this.props.request;

    let menuItems = []
    menuItems.push(<MenuItem onClick={this.onViewClicked} key='View'>View GiftCert</MenuItem>)      
    const requestStatus = item.get('status');

    const isUserAdmin = this.props.isUserAdmin
    const allowCreate = this.props.allowCreate
    const allowModify = this.props.allowModify
    const allowDelete = this.props.allowDelete

    let statusActionItems = []
    if ((requestStatus == 1 || requestStatus == 91 || isUserAdmin) && allowModify) {
      statusActionItems.push(<MenuItem onClick={this.onModifyClicked} key='Modify'>Modify</MenuItem>)
    }

    if(item.get('referenceRequestId') === null && allowCreate) {
      statusActionItems.push(<MenuItem onClick={this.onCreateNewForm} key='CreateNewForm'>Create New Form</MenuItem>)
    }

    if ((requestStatus == 91 || requestStatus == 33 || requestStatus == 90) && allowCreate) {
      statusActionItems.push(<MenuItem onClick={this.onResubmit} key='Resumbmit'>Re-Submit</MenuItem>)
    }

    if ((requestStatus == 91 || requestStatus == 1) && allowDelete) {
      statusActionItems.push(<MenuItem onClick={this.onDelete} key='Delete'>Delete</MenuItem>)
    }

    if (statusActionItems.length > 0) {
      menuItems.push(<MenuItem divider key='divider' />)
      menuItems = menuItems.concat(statusActionItems)
    }

    const title =(
      <i className='fa fa-gear' />
    )

    const actionsElem = (
      <DropdownButton pullRight title={title} id='dropdown'>
        {menuItems}
      </DropdownButton>
    )

    const gcType = item.get('gcType')
    const gcTypeString = gcType != null ? gcType.get('name') : '-'

    const division = item.get('division')
    const divisionString = division != null ? division.get('name') : '-'

    const businessLine = item.get('businessLine')
    const businessLineString = businessLine != null ? businessLine.get('name') : '-'

    const issuanceDate = item.get('issuanceDate')
    const issuanceDateString = issuanceDate != null ? dataUtils.renderToLocalDateTime(issuanceDate) : '-'

    const expirationDate = item.get('expirationDate')
    const expirationDateString = expirationDate != null ? dataUtils.renderToLocalDateTime(expirationDate) : '-'

    const toggleDetail = this.props.toggleDetail      
    return (
        <tr>
        <td>{item.get('giftCertNo')}</td>
        <td>{gcTypeString}</td>   
        <td>{item.get('value')}</td>
        <td>{item.get('dtiPermitNo')}</td>
        <td>{gcTypeString}</td>    
        <td>{issuanceDateString}</td>
        <td>{expirationDateString}</td>
        <td><GiftCertStatus value={item.get('status')} /></td>
        <td>
          {actionsElem}
        </td>
      </tr>
    )
  }
}

GiftCertComponent.props = {
  request: PropTypes.object.isRequired,
  isUserAdmin: PropTypes.bool.isRequired
}

const GiftCert = connect()(GiftCertComponent)

export default GiftCert
