import React, { PropTypes } from 'react';
import { gcTypeList } from 'Utils/gcTypeEnum'

export default function GcType({value}){
  return (
    <span>
      {
        gcTypeList.filter((item) => {
          return item.id == value
        })[0].name
      }
    </span>
  )
}

GcType.props = {
  value: PropTypes.number.isRequired
}
