import React, { PropTypes } from 'react'
import style from './style'

const { object, func } = PropTypes

Lots.propTypes = {
  lots: object.isRequired,
  onAddLot: func.isRequired,
  onRemoveLot: func.isRequired
}

export default function Lots({lots, onAddLot, onRemoveLot}) {
  return (
    <div>
      <div style={style.lotHeader}>
        <div style={style.lotRowHeader}>
          <button className='btn btn-default btn-xs'
            onClick={(e) => {
              e.preventDefault();
              onAddLot();
            }}>Add Lot</button>
        </div>
        <div style={style.waferNumberHeader}>Wafer #</div>
        <div style={style.assemblyLotHeader}>Assembly Lot</div>
        <div style={style.dateCodeHeader}>Date Code</div>
        <div style={style.quantityHeader}>Quantity</div>
        <div style={style.actionHeader}></div>
      </div>
      <div style={style.lotBody}>
      {
        lots.map((item, idx) => {
          return (<div key={idx} style={style.lotRow}>
            <div style={style.lotRowHeader}>&nbsp;</div>
            <div style={style.waferNumberColumn}>{item.get('waferNo')}</div>
            <div style={style.assemblyLotColumn}>{item.get('assemblyLot')}</div>
            <div style={style.dateCodeColumn}>{item.get('dateCode')}</div>
            <div style={style.quantityColumn}>{item.get('quantity')}</div>
            <div style={style.actionColumn}>
              <i className='fa fa-remove' style={style.removeLot}
                onClick={ (e) => {
                  e.preventDefault
                  onRemoveLot(item)
                } }></i>
            </div>
          </div>)
        })
      }
      </div>
    </div>
  )
}
