import React, {Component} from 'react';
import axios from 'axios';
import moment from 'moment';
import Clock from './Clock';

class Form extends Component {

  state = {
    teacher: '',
  }

  onChange = (event) => this.setState({teacher: event.target.value});


  onClick = async(type) => {
    this.setState({error: ''});
    try{
      const url = type === 'out' ? '/api/clockout' : '/api/clockin';
      const method = type === 'out' ? 'PUT' : 'POST';
      const {teacher} = this.state;
      const data = {teacher_name: teacher.trim(), time: Date.now().toString()}
      // console.log('data before post', data, 'moment conversion', moment(1552169020918)._d);
      const response = await axios({method, url, data});
      console.log('resp from submit clock', response);
      this.setState({loading: false, successMessage: `Thanks ${this.props.capitalize(teacher.trim())}! ${response.data.message}`});
      setTimeout(() => this.setState({successMessage: ''}), 2000);
    }
    catch(e){
      console.log('e in submitting info', e);
      console.log('full error', e.response);
      this.setState({loading: false, error: e.response.data.message});
    }
  }

  render(){
    const {error, successMessage} = this.state;

    return (
      <div className="form">

        <h1>
          Welcome to the HiMama Clocker
        </h1>

        <Clock />

        <p className="desc">
          Teachers, please clock in when you arrive, and clock out when you leave
        </p>

        <p className="form-text">
          Please tell us your name:
        </p>

        <input
          type="text"
          placeholder="Jane Doe"
          required
          value={this.state.teacher}
          onChange={this.onChange}
          className="input"
        />

        <p className="form-text">
          What would you like to do?
        </p>

        <div className="header clock-type">
          <button
            onClick={this.onClick}
            className="button"
          >
            Clock In
          </button>

          <button
            onClick={() => this.onClick('out')}
            className="button"
          >
            Clock Out
          </button>
        </div>

        {
          successMessage || error ?
            <p className={error ? 'error' : "success"}>
              {error ? error : successMessage}
            </p>
          :
          null
        }
      </div>
    )
  }
}

export default Form;
