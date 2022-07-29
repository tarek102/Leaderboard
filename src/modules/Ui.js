export default class Ui {
  display = (arr) => {
    arr.forEach((element) => {
      const list = document.querySelector('.score-list');
      if (list.children.length > arr.length - 1) {
        return false;
      }
      const newList = document.createElement('li');
      newList.innerHTML = `Name: ${element.user} , ${element.score}`;
      list.appendChild(newList);
      return true;
    });
    return arr;
  }
}