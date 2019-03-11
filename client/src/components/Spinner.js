import React from 'react';
import { FadeLoader } from 'react-spinners';

const Spinner = (props) => {
  return (
    <div className="spinner">
      <FadeLoader
        sizeUnit={"px"}
        size={50}
        color={'#34b9c6'}
        loading={props.loading}
      />
    </div>
  )
};

export default Spinner;
