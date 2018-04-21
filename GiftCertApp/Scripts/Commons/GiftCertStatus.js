import React, { PropTypes } from 'react';
import { statusList } from 'Utils/GiftCertStatusEnum'

export default function GiftCertStatus({value}){
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

GiftCertStatus.props = {
  value: PropTypes.number.isRequired
}
