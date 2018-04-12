import React, { PropTypes } from 'react';
import classnames from 'classnames'
import { fromJS } from 'Immutable'

class DeviceCharecteristicEditor extends React.Component {
  constructor() {
    super()

    this.onFieldChanged = this.onFieldChanged.bind(this)
    this.onChannelChanged = this.onChannelChanged.bind(this)
  }

  onFieldChanged (name, e) {
    const value = e.target.value;
    const device = this.props.device;

    const changes = {
      [name]: fromJS(value)
    }

    this.props.onCharacteristicChanged(changes)
  }

  onChannelChanged(e) {
    const value = e.target.value;
    const device = this.props.device;

    const changes =  {
      channel: {
        id: value,
        name: $('option:selected', e.target).text()
      }
    };

    this.props.onCharacteristicChanged(changes)
  }

  render() {
    const device = this.props.device;
    const isReadOnly = device.get('isReadOnly')

    let inputAttr = {};

    if (isReadOnly) {
      inputAttr.disabled = 'true';
    }

    const style = {
      pcbMountHelpLabel: {
        fontSize: '12px'
      }
    }

    const hexSizeInputDiv = classnames('col-xs-8', {
      'has-error': device.get('hexSizeIsEmpty')
    })

    const generationInputDiv = classnames('col-xs-8', {
      'has-error': device.get('generationIsEmpty')
    })

    const dieDimensionInputDiv = classnames('col-xs-8', {
      'has-error': device.get('dieDimensionIsEmpty')
    })

    const dieThicknessInputDiv = classnames('col-xs-8', {
      'has-error': device.get('dieThicknessIsEmpty')
    })

    const activeAreaInputDiv = classnames('col-xs-8', {
      'has-error': device.get('activeAreaIsEmpty')
    })

    const gateOxideThicknessInputDiv = classnames('col-xs-8', {
      'has-error': device.get('gateOxideThicknessIsEmpty')
    })

    const numBondWiresInputDiv = classnames('col-xs-8', {
      'has-error': device.get('numBondWiresIsEmpty')
    })

    const bondWireDiameterInputDiv = classnames('col-xs-8', {
      'has-error': device.get('bondWireDiameterIsEmpty')
    })

    const channelInputDiv = classnames('col-xs-8', {
      'has-error': device.get('channelIsEmpty')
    })

    const vsdInputDiv = classnames('col-xs-8', {
      'has-error': device.get('vsdIsEmpty')
    })

    const bvdssInputDiv = classnames('col-xs-8', {
      'has-error': device.get('bvdssIsEmpty')
    })

    const tjMaxInputDiv = classnames('col-xs-8', {
      'has-error': device.get('tjMaxIsEmpty')
    })

    const rdsVceTypicalInputDiv = classnames('col-xs-8', {
      'has-error': device.get('rdsVceTypicalIsEmpty')
    })

    const rdsVceMaxInputDiv = classnames('col-xs-8', {
      'has-error': device.get('rdsVceMaxIsEmpty')
    })

    const vgsMaxInputDiv = classnames('col-xs-8', {
      'has-error': device.get('vgsMaxIsEmpty')
    })

    const internalRgInputDiv = classnames('col-xs-8', {
      'has-error': device.get('internalRgIsEmpty')
    })

    const idssMax25InputDiv = classnames('col-xs-8', {
      'has-error': device.get('idssMax25IsEmpty')
    })

    const idssMax125InputDiv = classnames('col-xs-8', {
      'has-error': device.get('idssMax125IsEmpty')
    })

    const igssMaxVgsPlusInputDiv = classnames('col-xs-8', {
      'has-error': device.get('igssMaxVgsPlusIsEmpty')
    })

    const igssMaxVgsMinusInputDiv = classnames('col-xs-8', {
      'has-error': device.get('igssMaxVgsMinusIsEmpty')
    })

    const rgTypicalInputDiv = classnames('col-xs-8', {
      'has-error': device.get('rgTypicalIsEmpty')
    })

    const rgMaxInputDiv = classnames('col-xs-8', {
      'has-error': device.get('rgMaxIsEmpty')
    })

    const vgsThMinInputDiv = classnames('col-xs-8', {
      'has-error': device.get('vgsThMinIsEmpty')
    })

    const vgsThTypicalInputDiv = classnames('col-xs-8', {
      'has-error': device.get('vgsThTypicalIsEmpty')
    })

    const vgsThMaxInputDiv = classnames('col-xs-8', {
      'has-error': device.get('vgsThMaxIsEmpty')
    })

    const rthPcbMountInputDiv = classnames('col-xs-8', {
      'has-error': device.get('rthPcbMountIsEmpty')
    })

    return (
      <form className='form-horizontal'>
        <div className='row'>
          <div className='form-group col-xs-6'>
            <label className='col-xs-4 control-label'>Hex Size</label>
            <div className={hexSizeInputDiv}>
              <input type='text' className='form-control' {...inputAttr}
                value={device.get('hexSize')} onChange={_.partial(this.onFieldChanged, 'hexSize')} />
            </div>
          </div>
          <div className='form-group col-xs-6'>
            <label className='col-xs-4 control-label'>Generation</label>
            <div className={generationInputDiv}>
              <input type='text' className='form-control' {...inputAttr}
                value={device.get('generation')} onChange={_.partial(this.onFieldChanged, 'generation')} />
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='form-group col-xs-6'>
            <label className='col-xs-4 control-label'>Die Dimension</label>
            <div className={dieDimensionInputDiv}>
              <input type='text' className='form-control' {...inputAttr}
                value={device.get('dieDimension')} onChange={_.partial(this.onFieldChanged, 'dieDimension')}/>
            </div>
          </div>
          <div className='form-group col-xs-6'>
            <label className='col-xs-4 control-label'>Die Thickness</label>
            <div className={dieThicknessInputDiv}>
              <input type='text' className='form-control' {...inputAttr}
                value={device.get('dieThickness')} onChange={_.partial(this.onFieldChanged, 'dieThickness')}/>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='form-group col-xs-6'>
            <label className='col-xs-4 control-label'>Active Area</label>
            <div className={activeAreaInputDiv}>
              <input type='text' className='form-control' {...inputAttr}
                value={device.get('activeArea')} onChange={_.partial(this.onFieldChanged, 'activeArea')}/>
            </div>
          </div>
          <div className='form-group col-xs-6'>
            <label className='col-xs-4 control-label'>Gate Oxide Thickness</label>
            <div className={gateOxideThicknessInputDiv}>
              <input type='text' className='form-control' {...inputAttr}
                value={device.get('gateOxideThickness')} onChange={_.partial(this.onFieldChanged, 'gateOxideThickness')}/>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='form-group col-xs-6'>
            <label className='col-xs-4 control-label'># of Bond Wires</label>
            <div className={numBondWiresInputDiv}>
              <input type='text' className='form-control' {...inputAttr}
              value={device.get('numBondWires')} onChange={_.partial(this.onFieldChanged, 'numBondWires')}/>
            </div>
          </div>
          <div className='form-group col-xs-6'>
            <label className='col-xs-4 control-label'>Bond Wire Diameter</label>
            <div className={bondWireDiameterInputDiv}>
              <input type='text' className='form-control' {...inputAttr}
                value={device.get('bondWireDiameter')} onChange={_.partial(this.onFieldChanged, 'bondWireDiameter')}/>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='form-group col-xs-6'>
            <label className='col-xs-4 control-label'>Channel</label>
            <div className={channelInputDiv}>
              <select className='form-control' {...inputAttr}
                value={device.get('channel').get('id')} onChange={this.onChannelChanged}>
                <option value=''>Please select a channel</option>
                {
                  this.props.channelsData.map((item, idx) => {
                    return (
                      <option key={idx} value={item.get('id')}>{item.get('name')}</option>
                    )
                  })
                }
              </select>
            </div>
          </div>
          <div className='form-group col-xs-6'>
            <label className='col-xs-4 control-label'>Vsd</label>
            <div className={vsdInputDiv}>
              <input type='text' className='form-control' {...inputAttr}
                value={device.get('vsd')} onChange={_.partial(this.onFieldChanged, 'vsd')}/>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='form-group col-xs-6'>
            <label className='col-xs-4 control-label'>Bvdss</label>
            <div className={bvdssInputDiv}>
              <input type='text' className='form-control' {...inputAttr}
                value={device.get('bvdss')} onChange={_.partial(this.onFieldChanged, 'bvdss')}/>
            </div>
          </div>
          <div className='form-group col-xs-6'>
            <label className='col-xs-4 control-label'>Tj max</label>
            <div className={tjMaxInputDiv}>
              <input type='text' className='form-control' {...inputAttr}
                value={device.get('tjMax')} onChange={_.partial(this.onFieldChanged, 'tjMax')}/>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='form-group col-xs-6'>
            <label className='col-xs-4 control-label'>Rds(on)/Vce(on) Typical</label>
            <div className={rdsVceTypicalInputDiv}>
              <input type='text' className='form-control' {...inputAttr}
              value={device.get('rdsVceTypical')} onChange={_.partial(this.onFieldChanged, 'rdsVceTypical')}/>
            </div>
          </div>
          <div className='form-group col-xs-6'>
            <label className='col-xs-4 control-label'>Rds(on)/Vce(on) Max</label>
            <div className={rdsVceMaxInputDiv}>
              <input type='text' className='form-control' {...inputAttr}
              value={device.get('rdsVceMax')} onChange={_.partial(this.onFieldChanged, 'rdsVceMax')}/>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='form-group col-xs-6'>
            <label className='col-xs-4 control-label'>Vgs Max</label>
            <div className={vgsMaxInputDiv}>
              <input type='text' className='form-control' {...inputAttr}
                value={device.get('vgsMax')} onChange={_.partial(this.onFieldChanged, 'vgsMax')}/>
            </div>
          </div>
          <div className='form-group col-xs-6'>
            <label className='col-xs-4 control-label'>Internal RG</label>
            <div className={internalRgInputDiv}>
              <input type='text' className='form-control' {...inputAttr}
                value={device.get('internalRg')} onChange={_.partial(this.onFieldChanged, 'internalRg')}/>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='form-group col-xs-6'>
            <label className='col-xs-4 control-label'>Idss max 25&deg;C</label>
            <div className={idssMax25InputDiv}>
              <input type='text' className='form-control' {...inputAttr}
                value={device.get('idssMax25')} onChange={_.partial(this.onFieldChanged, 'idssMax25')}/>
            </div>
          </div>
          <div className='form-group col-xs-6'>
            <label className='col-xs-4 control-label'>Idss max 125&deg;C</label>
            <div className={idssMax125InputDiv}>
              <input type='text' className='form-control' {...inputAttr}
                value={device.get('idssMax125')} onChange={_.partial(this.onFieldChanged, 'idssMax125')}/>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='form-group col-xs-6'>
            <label className='col-xs-4 control-label'>Igss max +Vgs</label>
            <div className={igssMaxVgsPlusInputDiv}>
              <input type='text' className='form-control' {...inputAttr}
              value={device.get('igssMaxVgsPlus')} onChange={_.partial(this.onFieldChanged, 'igssMaxVgsPlus')}/>
            </div>
          </div>
          <div className='form-group col-xs-6'>
            <label className='col-xs-4 control-label'>Igss max -Vgs</label>
            <div className={igssMaxVgsMinusInputDiv}>
              <input type='text' className='form-control' {...inputAttr}
              value={device.get('igssMaxVgsMinus')} onChange={_.partial(this.onFieldChanged, 'igssMaxVgsMinus')}/>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='form-group col-xs-6'>
            <label className='col-xs-4 control-label'>Rg Typical</label>
            <div className={rgTypicalInputDiv}>
              <input type='text' className='form-control' {...inputAttr}
                value={device.get('rgTypical')} onChange={_.partial(this.onFieldChanged, 'rgTypical')}/>
            </div>
          </div>
          <div className='form-group col-xs-6'>
            <label className='col-xs-4 control-label'>Rg Max</label>
            <div className={rgMaxInputDiv}>
              <input type='text' className='form-control' {...inputAttr}
                value={device.get('rgMax')} onChange={_.partial(this.onFieldChanged, 'rgMax')}/>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='form-group col-xs-6'>
            <label className='col-xs-4 control-label'>Vgs(th) Min</label>
            <div className={vgsThMinInputDiv}>
              <input type='text' className='form-control' {...inputAttr}
              value={device.get('vgsThMin')} onChange={_.partial(this.onFieldChanged, 'vgsThMin')}/>
            </div>
          </div>
          <div className='form-group col-xs-6'>
            <label className='col-xs-4 control-label'>Vgs(th) Typical</label>
            <div className={vgsThTypicalInputDiv}>
              <input type='text' className='form-control' {...inputAttr}
              value={device.get('vgsThTypical')} onChange={_.partial(this.onFieldChanged, 'vgsThTypical')}/>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='form-group col-xs-6'>
            <label className='col-xs-4 control-label'>Vgs(th) Max</label>
            <div className={vgsThMaxInputDiv}>
              <input type='text' className='form-control' {...inputAttr}
              value={device.get('vgsThMax')} onChange={_.partial(this.onFieldChanged, 'vgsThMax')}/>
            </div>
          </div>
          <div className='form-group col-xs-6'>
            <div className='col-xs-4'>
              <label className='control-label pull-right'>Rth PCB Mount</label>
              <br/>
              <span className='help-block pull-right' style={style.pcbMountHelpLabel}>(Required for DirectFET)</span>
            </div>
            <div className={rthPcbMountInputDiv}>
              <input type='text' className='form-control' {...inputAttr}
                value={device.get('rthPcbMount')} onChange={_.partial(this.onFieldChanged, 'rthPcbMount')}/>
            </div>
          </div>
        </div>
      </form>
    )
  }
}

DeviceCharecteristicEditor.props = {
  device: PropTypes.object.isRequired,
  channelsData: PropTypes.object.isRequired,
  onCharacteristicChanged: PropTypes.func.isRequired
}

export default DeviceCharecteristicEditor
