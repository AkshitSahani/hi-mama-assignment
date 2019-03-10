import React, {Component} from 'react';
import axios from 'axios';
import ClockList from '../components/ClockList';
import Form from '../components/Form';

class Home extends Component {

  state = {
    screen: 'form'
  }

  onClick = () => this.state.screen === 'index' ? this.setState({screen: 'form'}) : this.setState({screen: 'index'});

  render(){
    return (
      <div >
        <div className="header">

          <h4>
            Test
          </h4>

          <h1>
            Welcome to HiMama!
          </h1>

          <button onClick={this.onClick}>
            See All Data
          </button>
        </div>

        {
          this.state.screen === 'index' ?
            <ClockList />
          :
          <Form

          />
        }


      </div>
    )
  }
}

export default Home;
