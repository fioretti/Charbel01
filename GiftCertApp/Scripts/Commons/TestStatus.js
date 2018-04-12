import React, { PropTypes } from 'react';
import { statusList } from 'Utils/TestStatusEnum'

export default function TestStatus({value}){
  return (
    <span>
      {
        statusList.filter((item) => {
          return item.id == value
        })[0].name
      }
    </span>
  )
}

TestStatus.props = {
  value: PropTypes.number.isRequired
}
