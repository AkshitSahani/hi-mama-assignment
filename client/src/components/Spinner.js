import React from 'react';
import { ClipLoader } from 'react-spinners';

const Spinner = (props) => {
  return (
    <div
        className="spinner"
        // style={{height: this.props.height, width: this.props.width, zIndex: (this.props.loading ? 5 : -5)}}
    >
      <ClipLoader
        sizeUnit={"px"}
        size={40}
        color={'#000000'}
        loading={props.loading}
      />
    </div>
  )
};

export default Spinner;
