import React, {Component} from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import ClockEvent from './ClockEvent';

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
      return this.state.clocks.map((c, index) => {

        return (
          [
            <ClockEvent
              teacherName={this.props.capitalize(c.teacher_name)}
              color={'#108790'}
              type={'In'}
              time={c.clock_in_time}
              key={c.clock_in_time + index}
            />,
            c.clock_out_time ?
              <ClockEvent
                teacherName={this.props.capitalize(c.teacher_name)}
                color={'#6a55a1'}
                type={"Out"}
                time={c.clock_out_time}
                key={c.clock_out_time + index}
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
      <div className="events-container">

        <h1 style={{marginBottom: 40}}>
          View all clock events
        </h1>

        <div className="header bold">
          <span className="list name">
            Teacher Name
          </span>

          <span className="list type">
            Clock Type
          </span>

          <span className="list time">
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
