import React from 'react';
import moment from 'moment';
//make sure to check for timezone before using moment!!!!!!!!

const Clock = (props) => {
  return (
    <div style={{marginTop:20}} className='header'>
      <p>
        {props.teacherName}
      </p>
      <p>
        {props.type}
      </p>
      <p>
        {moment(parseInt(props.time)).format("MM/DD/YYYY, h:mm:ss")}
      </p>
    </div>
  )
}

export default Clock;
