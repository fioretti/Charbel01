import React from 'react';
import ReactDOM from 'react-dom';

import ConfirmationModal from 'Commons/ConfirmationModal';
import ConfirmationModalWithFlag from 'Commons/ConfirmationModalWithFlag';
import ConfirmationModalWithNote from 'Commons/ConfirmationModalWithNote';
import ConfirmationModalWithUrlLink from 'Commons/ConfirmationModalWithUrlLink';
import ConfirmationModalWithReason from 'Commons/ConfirmationModalWithReason'
import ConfirmationModalWithReasonForTest from  'Commons/ConfirmationModalWithReasonForTest'
import ConfirmationModalWithTest from  'Commons/ConfirmationModalWithTest'
import TestConditionEditor from 'Commons/TestConditionEditor'
import TestEditor from 'Commons/TestEditor'
import TechnicianScheduleEditor from 'Commons/TechnicianScheduleEditor'
import EquipmentCapacityEditor from 'Commons/EquipmentCapacityEditor'
import ManagerAcceptModal from 'Commons/ManagerAcceptModal'
import SubTypeEditorModal from 'Commons/SubTypeEditorModal'

export function redirect(url) {
  window.location = $('base').attr('href') + url;
}

export function openInNewWindow(url) {
  window.open(url, '_blank');
}

export function showDialog(elem) {
  const wrapper = document.body.appendChild(document.createElement('div'));
  const modal = ReactDOM.render(elem, wrapper);
  const cleanup = function() {
    ReactDOM.unmountComponentAtNode(wrapper);
    return setTimeout(function() {
      return wrapper.remove();
    });
  };

  modal.promise.always(cleanup).promise();
}

export function showSubTypeEditor(props) {
  const elem = (<SubTypeEditorModal {...props} />)
  showDialog(elem)
}

export function showManagerAcceptDialog(props) {
  const elem = (<ManagerAcceptModal {...props} />)
  showDialog(elem)
}

export function showEquipmentScheduleEditor(props) {
  const elem = (<EquipmentCapacityEditor {...props} />)
  showDialog(elem)
}

export function showTechnicianScheduleEditor(props) {
  const elem = (<TechnicianScheduleEditor {...props} />)
  showDialog(elem)
}

export function showTestEditor (props) {
  const elem = (<TestEditor {...props} />)
  showDialog(elem)
}

export function showTestConditionEditor(props) {
  const elem = (<TestConditionEditor {...props} />)
  showDialog(elem)
}


export function showConfirmationDialogWithTest(props) {
  const elem = (<ConfirmationModalWithTest {...props} />)
  showDialog(elem)
}

export function showConfirmationDialog(props) {
  const elem = (<ConfirmationModal {...props} />)
  showDialog(elem)
}

export function showConfirmationDialogWithReason(props) {
  const elem = (<ConfirmationModalWithReason {...props} />)
  showDialog(elem)
}

export function showConfirmationDialogWithReasonForTest(props) {
  const elem = (<ConfirmationModalWithReasonForTest {...props} />)
  showDialog(elem)
}

export function showConfirmationDialogWithFlag(props) {
  const elem = (<ConfirmationModalWithFlag {...props} />)
  showDialog(elem)
}


export function showConfirmationDialogWithUrlLink(props) {
  const elem = (<ConfirmationModalWithUrlLink {...props} />)
  showDialog(elem)
}

export function showConfirmationDialogWithNote(props) {
  const elem = (<ConfirmationModalWithNote {...props} />)
  showDialog(elem)
}
