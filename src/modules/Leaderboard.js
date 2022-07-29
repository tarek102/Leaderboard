export default class Leaderboard {
  constructor(url) {
    this.url = url;
  }

  getData = async (url) => {
    await fetch(url,{
      method: 'GET',
    })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem('list', JSON.stringify(data.result));
    })
  };



  addData = async (url, user, score) => {
    await fetch (url,{
      method: 'POST',
      headers: {'Content-Type' : 'application/json; charset=UTF-8'},
      body: JSON.stringify({user: user, score}),
    })
    .then((response) => response.json())
  };

}