import React, {Component} from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import Clock from './Clock';

class ClockList extends Component {

  state = {
    loading: true,
  }

  async componentDidMount(){
    try{
      const url = '/api/clockdata';
      const response = await axios.get(url);
      console.log('resp from get clocks', response);
      this.setState({clocks: response.data.data, });
    }
    catch(e){
      console.log('e in getting clocks', e);
      console.log('full error', e.response);
      this.setState({error: e.response.data.message, loading: false});
    }
  }

  renderClocks = () => {
    if(this.state.clocks.length){
      return this.state.clocks.map((c) => {
        // const clockData = [];

        return (
          [
            <Clock
              teacherName={c.teacher_name}
              type={'In'}
              time={c.clock_in_time}
            />,
            c.clock_out_time ?
              <Clock
                teacherName={c.teacher_name}
                type={"Out"}
                time={c.clock_out_time}
              />
            :
            null
          ]
        )
      })
    }
    return(
      <p className="error">
        There are no clock in or clock out times yet! Go back to the main page and create some!
      </p>
    )
  }

  render(){
    return (
      <div style={{width: '100%', height: 500}}>
        <h1>
          Welcome to the Clock List!!!
        </h1>

        <div className="header">
          <span>
            Teacher Name
          </span>

          <span>
            Clock Event type
          </span>

          <span>
            Time
          </span>
        </div>

        <div className="clocks-container">
          {
            this.state.clocks ?
              this.renderClocks()
            :
            <Spinner
              loading={this.state.loading}
            />
          }
        </div>

      </div>
    )
  }
}

export default ClockList;
