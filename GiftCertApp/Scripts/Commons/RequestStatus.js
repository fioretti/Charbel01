import React, { PropTypes } from 'react';
import { statusList } from 'Utils/RequestStatusEnum'

export default function RequestStatus({value}){
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

RequestStatus.props = {
  value: PropTypes.number.isRequired
}
