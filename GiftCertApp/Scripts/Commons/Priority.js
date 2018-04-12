import React, { PropTypes } from 'react';
import { priorityList } from 'Utils/PriorityEnum'

export default function Priority({value}){
  return (
    <span>
      {
        priorityList.filter((item) => {
          return item.id == value
        })[0].name
      }
    </span>
  )
}

Priority.props = {
  value: PropTypes.number.isRequired
}
