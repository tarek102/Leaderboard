import Leaderboard from "./Leaderboard.js";

export default class Ui {
  
  display = (arr) => {
    arr.forEach(element => {
      const list = document.querySelector('.score-list');
      if (list.children.length > arr.length - 1) {
        return false
        
      } else {
        
        const newList = document.createElement('li');
        const result = arr.result;
        newList.innerHTML = `Name: ${element.user} , ${element.score}`;
        list.appendChild(newList);
      }
    });
  }
  
}