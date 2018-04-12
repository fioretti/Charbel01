import React, { PropTypes }  from 'react';
import moment from 'moment'

import momentDuration from 'moment-duration-format'

export default function HumanizeMinutes({minutes}) {

  if (minutes >= 1440) {
    return (
      <span>
        {moment.duration(minutes, 'minutes').format("d [d] h [h]")}
      </span>
    )
  } else if (minutes > 0) {
    return (
      <span>
        {moment.duration(minutes, 'minutes').format("h [h] m [min]")}
      </span>
    )
  }
  else {
    return (
      <span>-</span>
    )
  }


}

HumanizeMinutes.props = {
  minutes: PropTypes.number.isRequired
}
