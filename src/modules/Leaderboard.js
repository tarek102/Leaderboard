import Ui from './Ui';

const newObj = new Ui();

export default class Leaderboard {
  constructor(url) {
    this.url = url;
  }

  getData = async (url) => {
    const response = await fetch(url, {
      method: 'GET',
    });
    const res = await response.json();
    const responseArr = await res.result;
    newObj.display(responseArr);
    return responseArr;
  };

  addData = async (url, user, score) => {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({ user, score }),
    })
      .then((response) => response.json());
  };
}