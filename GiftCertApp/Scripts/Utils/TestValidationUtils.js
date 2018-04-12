import * as dataUtils from './DataUtils'

export function testValidationState(test) {
  const numTemperaturesValue = test.get('numTemperatures')
  const temperatureIsNotValid = dataUtils.isEmpty(numTemperaturesValue)
    || !dataUtils.validNumber(numTemperaturesValue);

  const numDevicesPerLotValue = test.get('numOfDevices')
  const numDevicesPerLotValueIsNotValue = dataUtils.isEmpty(numDevicesPerLotValue)
    || !dataUtils.validNumber(numDevicesPerLotValue);

  return {
    temperatureIsEmpty: dataUtils.isEmpty(test.get('temperature')),
    numOfDevicesIsEmpty: numDevicesPerLotValueIsNotValue,
    temperatureIsNotValid: temperatureIsNotValid
  }
}

export function conditionValidationState(conditionSelection) {
  return {
    valueIsEmpty: dataUtils.isEmpty(conditionSelection.get('value'))
  }
}
