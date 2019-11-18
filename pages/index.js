import Room from '../components/Room';
import React, { Component } from 'react';
import Cookie from 'js-cookie';
import parserCookie from '../parseCookies';
import './index.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { }
  }
  static async getInitialProps({req}) {
    const cookies = parserCookie(req);
    return { cookies }
  }


  componentDidMount() {
    if (this.props.cookies.lastState === undefined) {
      this.setState({
        numberOfRooms: 4,
        roomState: [true, false, false, false],
        rooms: [
          {id: 1, adults: 1, children: 0},
          {id: 2, adults: 1, children: 0},
          {id: 3, adults: 1, children: 0},
          {id: 4, adults: 1, children: 0}
        ]
      })
    } else if (this.props.cookies !== undefined) {
      let refreshState = this.props.cookies;
      refreshState = JSON.parse(refreshState.lastState)
      this.setState({
        numberOfRooms: refreshState.numberOfRooms,
        roomState: refreshState.roomState,
        rooms: refreshState.rooms
      });
    }
  }

  handleCheckedChange(i) {
    let newRoomState = this.state.roomState;
    let currentIndex = i;
    let nextIndex = currentIndex + 1;
    let prevIndex = currentIndex - 1;
    switch (true) {
      case (newRoomState[nextIndex] === true):
          for(let num = currentIndex; num < newRoomState.length; num++) {
            if (newRoomState[num] === true) {
              newRoomState[num] = !newRoomState[num];
            }
          };
        break;
      case (newRoomState[prevIndex] === false):
          for (let num = 1; num <= currentIndex; num++) {
            if (newRoomState[num] === false){
              newRoomState[num] = !newRoomState[num];
            }
          };
          break;
      default:
        newRoomState[currentIndex] = !newRoomState[currentIndex];
        break;
    }
    this.setState({ roomState: newRoomState});
  }

  calculateRooms() {
    let rooms = [];
    for(let i = 0; i < this.state.numberOfRooms; ++i) {
      let roomNumber = i;
      let room = this.state.rooms[i];
      rooms.push(<Room
        key={i}
        number={roomNumber}
        room={this.state.rooms[i]}
        adults={this.state.rooms[i].adults}
        children={this.state.rooms[i].children}
        handleAdultValueChange={() => this.handleAdultValueChange(room.id, event)}
        handleChildValueChange={() => this.handleChildValueChange(room.id, event)}
        checked={this.state.roomState[roomNumber]}
        handleChange={() => this.handleCheckedChange(roomNumber)}/>
      )
    }
    return rooms;
  }

  handleAdultValueChange(id, event) {
    let newRooms = this.state.rooms.slice();
    let index = this.state.rooms.findIndex(i => i.id == id)
    newRooms[index].id = id;
    newRooms[index].adults = Number(event.target.value);
    this.setState({ rooms: newRooms });
  }

  handleChildValueChange(id, event) {
    let newRooms = this.state.rooms.slice();
    let index = this.state.rooms.findIndex(i => i.id == id)
    newRooms[index].id = id;
    newRooms[index].children = Number(event.target.value);
    this.setState({ rooms: newRooms });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    Cookie.set('lastState', this.state);
  }

  render () {
    return (
      <form className="listing-of-rooms" onSubmit={event => this.handleOnSubmit(event)}>
        {this.calculateRooms()}
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

export default Home;