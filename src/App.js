import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";
import "../src/css/App.css";




class App extends Component {

  state = {
    friends: friends,
    score: 0,
    clickedFriends: [],
    phrase: "Click to begin!"
  }
  handleClicked = (id) => {
    let clickedFriend = this.state.friends.find(friend => {
      return id === friend.id;
    });
    console.log(clickedFriend);
    if (!this.state.clickedFriends.includes(clickedFriend)) {
      this.setState({ clickedFriends: [...this.state.clickedFriends, clickedFriend] });
      this.setState({ score: this.state.score + 1 });
      this.setState({ phrase: "Correct!" });
      this.setState({
        friends: friends.sort(function (a, b) {
          return 0.5 - Math.random()
        })
      })


    }

    else if (this.state.clickedFriends.includes(clickedFriend)) {
      this.setState({ clickedFriends: [] });
      this.setState({ score: 0 });
      this.setState({ phrase: "Incorrect! Game Over!" });
      this.setState({
        friends: friends.sort(function (a, b) {
          return 0.5 - Math.random()
        })
      })
    }
  }



  render() {
    return (
      <div>
        <div id="head" className="row p-2 mb-5">

          <div className="col-5 ml-2">
            <h2> The Office Matching Game</h2>
          </div>
          <div className="col-4">
            <h2> {this.state.phrase} </h2>
          </div>
          <div className="col-2">
            <h2> Score: {this.state.score} </h2>
          </div>
        </div>



        <div className="container">
          <div className="row">

            {this.state.friends.map(friend => (
              <FriendCard
                key={friend.id}
                id={friend.id}
                name={friend.name}
                image={friend.image}
                handleClicked={this.handleClicked}
              />
            ))}

          </div>
        </div>
      </div>



    )
  }
}




export default App;
