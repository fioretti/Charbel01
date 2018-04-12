
import React, { PropTypes } from 'react';

export default function BooleanDisplayElement({value}){
  return (
    <span>
    {
      (() => {
        if (value) {
          return (<i className='fa fa-check'/>)
        }
      })()
    }
    </span>
  )
}

BooleanDisplayElement.props = {
  value: PropTypes.bool.isRequired
}
