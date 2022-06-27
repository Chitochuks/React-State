import React from 'react';
import Profile from './profile/profile';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      person: {
        fullName: "Chuks Chito",
        bio: "I just love ramen",
        imgSrc: require('./statework.jpg'),
        profession: "upcoming full stack web developer"
      },
      shows: false,
      date: new Date()
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  toggleProfile = () => {
    this.setState({
      shows: !this.state.shows
    })
  }
  
  render() {
    return (
      <div className='head'>
         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <div>{this.state.shows ? <Profile {...this.state.person}/> : null}</div>
        <button onClick={this.toggleProfile}>Toggle Profile</button>
      </div>
    )
  }
}

export default App;