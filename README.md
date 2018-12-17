# The Office Matching Game (REACT.js Clicky Game)
![Matching](https://henrymontesanoiii.github.io/static/media/Click.3a105b1a.png)

####Live Site: [The Office Matching Game!](https://henrymontesanoiii.github.io/clickyGame/)

----
## Basic Functionality
### The Office Matching Game is a REACT.js clicking game that requires the player to select each character without selecting a character they have already picked; if they can get their score to 15 by selecting each individual character, they win. However, if the player picks a character again that they have already picked, they will lose the game and the game will reset. After each character is clicked, the character's order is randomly sorted on the page to add additional difficulty to the game.

## How It Works
### The application uses a pre-defined list of characters with names & pictures that are rendered randomly with a .sort function to the page. The app's original state starts with a friends: friends.json(original character json array of objects), score = 0, phrase: "Click to begin!", and a clickedFriends: [ ] (empty array).

### When a character's picture is clicked, the app will check to see if that character is included within the current state of the clickedFriends array. If they are not found in that array, that character's i.d. is found in the friends state and update the clickedFriends array state to include that character. The score state is updated with +1 & the phrase state is updated to :"Correct!". If every character is clicked once before the player repeatedly clicks a character again, the score will equal 15 and the player has reached the max score!

### If the player does click on a character that has already been added to the clickedFriends array, the score state will reset to 0, the phrase state will update to :"Incorrect! Game Over!", and the clickedFriends array's state will be reset to an empty array, thus restarting the game.
