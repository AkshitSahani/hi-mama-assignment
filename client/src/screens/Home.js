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
      <div style={{display: 'flex', flexDirection: 'column', flex: 1}}>
        <div className="header main">

          <img src="https://s3.amazonaws.com/himama2/images/horizontal-logo.png"/>

          <h1>
            Welcome to HiMama!
          </h1>

          <button onClick={this.onClick}>
            {this.state.screen === 'form' ? "See All Data" : "Back to Clock"}
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
