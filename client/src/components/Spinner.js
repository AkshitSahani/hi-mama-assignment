import React from 'react';
import { FadeLoader } from 'react-spinners';

const Spinner = (props) => {
  return (
    <div
        className="spinner"
        // style={{height: this.props.height, width: this.props.width, zIndex: (this.props.loading ? 5 : -5)}}
    >
      <FadeLoader
        sizeUnit={"px"}
        size={50}
        color={'#ffffff'}
        loading={props.loading}
      />
    </div>
  )
};

export default Spinner;
