import React, {Component} from 'react';
import axios from 'axios';
import ClockList from '../components/ClockList';
import Form from '../components/Form';
import Clock from '../components/Clock';

class Home extends Component {

  state = {
    screen: 'form'
  }

  onClick = () => this.state.screen === 'index' ? this.setState({screen: 'form'}) : this.setState({screen: 'index'});

  capitalize = (str) => str.split(' ').map((s) => `${s[0].toUpperCase()}${s.slice(1)}`).join(' ');

  updateDimensions = () => window.innerWidth <= 400 ? this.setState({changeLogo: true}) : this.setState({changeLogo: false});

  componentDidMount(){
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
      window.removeEventListener("resize", this.updateDimensions);
  }

  render(){
    return (
      <div className="home">
        <div className="header main">

          <a href="/">
            <img
              src={`https://s3.amazonaws.com/himama2/${this.state.changeLogo ? 'logos/train-square' : 'images/horizontal-logo'}.png`}
              height={48}
            />
          </a>

          <h1 className="main-title">
            Childcare Apps for Superstar Centres
          </h1>

          <button
            onClick={this.onClick}
            className="button alt"
          >
            {this.state.screen === 'form' ? "See Clock Data" : "Back to Clocker"}
          </button>
        </div>

        {
          this.state.screen === 'index' ?
            <ClockList
              capitalize={this.capitalize}
            />
          :
          <Form
            capitalize={this.capitalize}
          />
        }

      </div>
    )
  }
}

export default Home;
