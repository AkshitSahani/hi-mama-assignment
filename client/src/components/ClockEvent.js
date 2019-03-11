import React from 'react';
import moment from 'moment';
//make sure to check for timezone before using moment!!!!!!!!

const ClockEvent = (props) => {
  return (
    <div
      className='header clock-event'
      style={{color: props.color}}
    >

      <span className="list name">
        {props.teacherName}
      </span>

      <span className="list type">
        {props.type}
      </span>

      <span className="list time">
        {moment(parseInt(props.time)).format("MM/DD/YYYY, h:mm A")}
      </span>

    </div>
  )
}

export default ClockEvent;
