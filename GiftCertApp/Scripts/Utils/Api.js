import axios from 'axios';

// Service Type
export const addNewServiceType = (serviceType, callback) => {
    return axios.post('/api/ServiceType', serviceType)
        .then(callback);
};

export const updateServiceType = (serviceType, callback) => {
    return axios.put('/api/ServiceType/' + serviceType.id, serviceType)
        .then(callback);
};

// GC Type
export const addNewGcType = (gcType, callback) => {
    return axios.post('/api/GcType', gcType)
        .then(callback);
};

export const updateGcType = (gcType, callback) => {
    return axios.put('/api/GcType/' + gcType.id, gcType)
        .then(callback);
};

// Outlet
export const addNewOutlet = (outlet, callback) => {
    return axios.post('/api/Outlet', outlet)
        .then(callback);
};

export const updateOutlet = (outlet, callback) => {
    return axios.put('/api/Outlet/' + outlet.id, outlet)
        .then(callback);
};


export function checkPartNumber(partNumber, callback) {
  $.post('partNumber/check', {partNumber: partNumber})
    .done(callback);
}

export function getSubRequestType(callback) {
  $.get('subRequestType/get')
    .done(function(data){
      callback(data);
    });
}

export function getDeviceType(callback) {
  $.get('deviceType/get')
    .done(function(data){
      callback(data);
    });
}

export function getChannels(callback) {
  $.get('channel/get')
    .done(function(data){
      callback(data);
    });
}

export function getPackageType(callback) {
  $.get('packageType/get')
    .done(function(data){
      callback(data);
    });
}

export function getPackageTypeGroup(callback) {
  $.get('packageTypeGroup/get')
    .done(function(data){
      callback(data);
    });
}

export function getDivisions(callback) {
  $.get('divisions/get')
    .done(callback);
}

export function getTargetLabs(callback) {
  $.get('targetlabs/get')
    .done(callback);
}

export function getTestRequestTypes(callback) {
  $.get('testRequestTypes/get')
    .done(callback);
}

export function addTestRequest(testRequest, callback) {
  $.post('testRequestForm/add', testRequest)
    .done(callback);
}

export function deleteRole(id, callback) {
  $.post('role/delete', {id: id})
    .done(callback)
}

export function addRole(role, callback) {
  $.post('role/add', role)
    .done(callback);
}

export function editRole(role, callback) {
  $.post('role/update', role)
    .done(callback);
}

export function searchUserAInAd(query, callback) {
  $.post('user/searchAd', {q: query})
    .done(callback);
}

export function editUser(user, callback) {
  $.post('user/edit', user)
    .done(callback)
}

export function addUser(user, callback) {
  $.post('user/add', user)
    .done(callback);
}

export function activateUser(id, callback) {
  $.post('user/activate', {id: id})
    .done(callback)
}

export function deactivateUser(id, callback) {
  $.post('user/deactivate', {id: id})
    .done(callback)
}

export function getTestSelection(params, callback) {
  $.post('testSelection/get', params)
    .done(callback);
}

export function queryMyRequests(params, callback) {
  $.post('myRequests/post', params)
    .done(callback);
}

export function getRequestsToAccept(statusFilter, callback) {
  $.post('requestsToAccept/Get', {statusFilter: statusFilter})
    .done(callback);
}

export function updateTestRequestForMultipleReview(params, callback) {
  $.post('requestsToAccept/MultipleDataReviews/' + params.id, {isAllowed: params.isAllowed})
      .done(callback);
}

export function setPartReceived(id, callback) {
  $.post('requestsToAccept/PartsReceived/' + id)
      .done(callback);
}

export function setManagerAccept(param, callback) {
  $.post('requestsToAccept/ManagerAccepted/' + param.id, { subRequestType: param.subRequestType })
      .done(callback);
}

export function setReleaseToLab(id, callback) {
  $.post('requestsToAccept/ReleasedToLab/' + id)
      .done(callback);
}

export function rejectRequestToRequester(params, callback) {
  $.post('requestsToAccept/RejectedToRequester/' + params.id, { adminSupportNotes: params.reason })
      .done(callback);
}

export function setPriority(params, callback) {
  $.post('requestsToAccept/Priority/' + params.id, { priority: params.priority })
      .done(callback);
}

export function setFastTrack(params, callback) {
  $.post('requestsToAccept/FastTrack/' + params.id, { fastTrack: params.fastTrack })
      .done(callback);
}
export function resubmitRequest(id, callback) {
  $.post('myRequests/ReSubmit/' + id)
    .done(callback)
}

export function deleteRequest(id, callback) {
  $.post('myRequests/DeleteRequest/' + id)
    .done(callback)
}

export function createNewFormAndHandle(params, callback) {
  $.post('myRequests/CreateNew/' + params.id, { keepTests: params.keepTests })
    .done(callback)
}

export function createNewFormAndHandleAllProjects(params, callback) {
  $.post('home/CreateNew/' + params.id, { keepTests: params.keepTests })
    .done(callback)
}

export function setStartTest(id, callback) {
  $.post('myTests/Start/' + id)
      .done(callback);
}

export function setStoptTest(params, callback) {
  $.post('myTests/Stop/' + params.id, {wipStation: params.note})
      .done(callback);
}

export function setPauseTest(id, callback) {
  $.post('myTests/Pause/' + id)
      .done(callback);
}

export function setOnHoldTest(params, callback) {
  $.post('myTests/OnHold/' + params.id, { techNotes: params.reason })
      .done(callback);
}

export function setResumeTest(id, callback) {
  $.post('myTests/Resume/' + id)
      .done(callback);
}

export function filterProjects(filter, callback) {
  $.post('Home/GetRequests', {request: filter})
    .done(callback);
}

export function prepareAllProjectsExport(filter, callback) {
  $.post('Home/PrepareExport', {request: filter})
    .done(callback)
}

export function setTestPriority(data, callback) {
  $.post('TestAssignment/TestPriority/' + data.id, {priority: data.priority})
    .done(callback);
}

export function setTestTechnician(data, callback) {
  $.post('TestAssignment/Technician/' + data.id, {technicianId: data.technician.id})
    .done(callback);
}

export function setProjectToOnHold(id, callback) {
  $.post('Home/OnHold/' + id)
    .done(callback);
}

export function setProjectToResume(id, callback) {
  $.post('Home/Resume/' + id)
    .done(callback);
}

export function setProjectToCancel(id, callback) {
  $.post('Home/Cancel/' + id)
    .done(callback);
}

export function setProjectToClosed(id, callback) {
  $.post('Home/Close/' + id)
    .done(callback);
}

export function setToWebDateFromAllProjects(id, callback) {
  $.post('Home/ToWeb/' + id)
    .done(callback);
}

export function rejectTestRequest(params, callback) {
  $.post('DatasheetProcessing/Reject/' + params.id, {
    comments: params.comments,
    testDataIds: params.testDataIds
  })
  .done(callback);
}

export function reviewTestRequest(params, callback) {
  $.post('DatasheetProcessing/ToReview/' + params.id)
    .done(callback);
}

export function setTestRequestReviewLink(params, callback) {
  $.post('DatasheetProcessing/SetReviewLink/' + params.id, {
    reviewLink: params.reviewLink
  })
  .done(callback);
}

export function setTestRequestToWeb(params, callback) {
  $.post('DatasheetProcessing/ToWeb/' + params.id)
    .done(callback);
}

export function setTestRequestToApprove(params, callback) {
  $.post('DatasheetProcessing/Approve/' + params.id)
    .done(callback);
}

export function setTestRequestToClosed(params, callback) {
  $.post('DatasheetProcessing/Close/' + params.id)
    .done(callback);
}

export function setProjectTestForReTest(params, callback) {
  $.post('ProjectTests/SetReTest/' + params.id, { isReTest: params.isReTest})
    .done(callback);
}

export function addReTestToProjectTest(params, callback) {
  $.post('ProjectTests/AddReTest/' + params.id, { testRequestId: params.testRequestId })
    .done(callback);
}

export function startProjectTest(id, callback) {
  $.post('ProjectTests/Start/' + id)
    .done(callback);
}

export function stopProjectTest(params, callback) {
  $.post('ProjectTests/Stop/' + params.id, {wipStation: params.note})
    .done(callback);
}

export function pauseProjecteTest(id, callback) {
  $.post('ProjectTests/Pause/' + id)
    .done(callback);
}

export function setOnHoldProjectTest(params, callback) {
  $.post('ProjectTests/OnHold/' + params.id, { techNotes: params.reason })
    .done(callback);
}

export function setResumeProjectTest(id, callback) {
  $.post('ProjectTests/Resume/' + id)
    .done(callback);
}

export function deleteProjectTest(id, callback) {
  $.post('ProjectTests/Delete/' + id)
    .done(callback);
}

export function getWiP(param, callback) {
  let postData = {}
  postData.groupType = param.groupType
  if (postData.groupType == 3) {
    postData.groupType = 1
    postData.id = param.testGroupFilterValue.get('id')
  }

  if (postData.groupType == 4) {
    postData.groupType = 2
    postData.id = param.techFilterValue.get('id')
  }

  $.post('WipProjects/Get', postData)
    .done(callback);
}

export function changeTestTechnician(params, callback) {
  $.post('WipProjects/Technician/' + params.id, {technicianId: params.technician.id})
    .done(callback);
}

export function acceptDatasheet(id, callback) {
  $.post('DatasheetAcceptance/Accept/' + id)
    .done(callback);
}

export function acceptQualtiyReview(id, callback) {
  $.post('QualityAcceptance/Accept/' + id)
    .done(callback);
}

export function startReview(id, callback) {
  $.post('QualityReview/StartReview/' + id)
    .done(callback);
}

export function reviewOut(id, callback) {
  $.post('QualityReview/ReviewOut/' + id)
    .done(callback);
}

export function multipleReviewOut(params, callback) {
  $.post('QualityReview/MultiReviewOut/' + params.id, { testDataIds: params.testDataIds })
    .done(callback);
}

export function rejectReview(params, callback) {
  $.post('QualityReview/RejectTests/' + params.id, { reviewerComments: params.reason, testDataIds: params.testDataIds })
    .done(callback);
}

export function saveTestCondition(condition, callback) {
  $.post('TestConditionAdmin/Save', { data: condition })
    .done(callback);
}

export function saveTest(test, callback) {
  $.post('TestAdmin/Save/', { data: test })
    .done(callback);
}

export function setDatasheetToCancel(id, callback) {
  $.post('DatasheetAcceptance/Cancel/' + id)
    .done(callback);
}

export function setDatasheetToOnHold (id, callback) {
  $.post('DatasheetAcceptance/OnHold/' + id)
    .done(callback);
}

export function setDatasheetToReject(data, callback) {
  $.post('DatasheetAcceptance/RejectTests/' + data.id, { reviewerComments: data.reason,  testDataIds: data.testDataIds })
    .done(callback);
}

export function setQualityReviewToCancel(id, callback) {
  $.post('QualityAcceptance/Cancel/' + id)
    .done(callback);
}

export function setQualityReviewToOnHold(id, callback) {
  $.post('QualityAcceptance/OnHold/' + id)
    .done(callback);
}

export function setQualityRejectReview(data, callback) {
  $.post('QualityAcceptance/RejectTests/' + data.id, { reviewerComments: data.reason,  testDataIds: data.testDataIds })
    .done(callback);
}

export function updateTechnicianSchedule(data, callback) {
  $.post('TechSchedule/Save/', { date: data })
    .done(callback);
}

export function updateEquipmentCapacity(data, callback) {
  $.post('EquipmentCapacity/Save/', { date: data })
    .done(callback);
}

export function getDataSheetProcessingList(viewType, callback) {
  $.get('DatasheetProcessing/GetList?viewType=' + viewType)
    .done(callback);
}

export function modifySubType(subType, callback) {
  $.post('SubTypeTable/Save', {data: subType})
    .done(callback);
}

export function saveDeviceCharacteristic(device, callback) {
  $.post('DeviceCharacteristicAdmin/Save', {device: device})
    .done(callback);
}

export function deleteDevice(id, callback) {
  $.post('DeviceCharacteristicAdmin/delete/' + id)
    .done(callback);
}

export function addNewDivision(division, callback) {
  $.post('DivisionAdmin/InsertDivision', { division: division })
    .done(callback)
}

export function addNewBusinessLine(postData, callback) {
  $.post('DivisionAdmin/InsertBusinessLine', {
    businessLine: postData.businessLine,
    divisionId: postData.divisionId
  }).done(callback)
}

export function addNewProductLine(postData, callback) {
  $.post('DivisionAdmin/InsertProductLine', {
    productLine: postData.productLine,
    businessLineId: postData.businessLineId
  }).done(callback)
}

export function addNewSegment(postData, callback) {
  $.post('DivisionAdmin/InsertSegment', {
    segment: postData.segment,
    productLineId: postData.productLineId
  }).done(callback)
}

export function updateDivision(division, callback) {
  $.post('DivisionAdmin/updateDivision', { division: division })
    .done(callback)
}

export function updateBusinessLine(businessLine, callback) {
  $.post('DivisionAdmin/UpdateBusinessLine', {businessLine : businessLine })
    .done(callback)
}

export function updateProductLine(productLine, callback) {
  $.post('DivisionAdmin/UpdateProductLine', {productLine: productLine})
    .done(callback)
}

export function updateSegment(segment, callback) {
  $.post('DivisionAdmin/UpdateSegment', {segment: segment})
    .done(callback)
}

export function addNewRequestType(requestType, callback) {
  $.post('RequestTypeAdmin/AddNewRequestType', {requestType: requestType})
    .done(callback)
}

export function addNewSubRequestType(subRequestType, callback) {
  $.post('RequestTypeAdmin/AddNewSubRequestType', {subRequestType: subRequestType})
    .done(callback)
}

export function updateRequestType(requestType, callback) {
  $.post('RequestTypeAdmin/UpdateRequestType', {requestType: requestType})
    .done(callback)
}

export function updateSubRequestType(subRequestType, callback) {
  $.post('RequestTypeAdmin/UpdateSubRequestType', {subRequestType: subRequestType})
    .done(callback)
}



export function addNewTargetLab(targetLab, callback) {
  $.post('TargetLabAdmin/Insert', {targetLab: targetLab})
    .done(callback)
}

export function updateTargetLab(targetLab, callback) {
  $.post('TargetLabAdmin/Update', {targetLab: targetLab})
    .done(callback)
}

export function getMyTestInfo(id, callback) {
  $.get('MyTests/GetTestInfo/'+ id)
    .done(callback)
}

export function copyTest(test, callback) {
  $.post('MyTests/copyTest', {test: test})
    .done(callback)
}
export function addNewChannel(channel, callback) {
  $.post('ChannelsAdministration/Insert', {channel: channel})
    .done(callback)
}

export function updateChannel(channel, callback) {
  $.post('ChannelsAdministration/Update', {channel: channel})
    .done(callback)
}
export function addPackageTypeGroup(packageTypeGroup, callback) {
  $.post('PackageTypeAdmin/InsertPackageTypeGroup', {packageTypeGroup: packageTypeGroup})
    .done(callback)
}

export function updatePackageTypeGroup(packageTypeGroup, callback) {
  $.post('PackageTypeAdmin/UpdatePackageTypeGroup', {packageTypeGroup: packageTypeGroup})
    .done(callback)
}

export function addPackageType(packageType, callback) {
  $.post('PackageTypeAdmin/InsertPackageType', {packageType: packageType})
    .done(callback)
}

export function updatePackageType(packageType, callback) {
  $.post('PackageTypeAdmin/UpdatePackageType', {packageType: packageType})
    .done(callback)
}
