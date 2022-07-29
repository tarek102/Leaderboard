import Leaderboard from './modules/Leaderboard';
import Ui from './modules/Ui';
import './style.css';

// Variables

const submitBtn = document.querySelector('#submit-btn');
const inputScore = document.querySelector('#input-score');
const inputName = document.querySelector('#input-name');
const refreshBtn = document.querySelector('#refresh-btn');
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/fgzmeCvOsXZ5bhSUpeKq/scores/';
const leaderboard = new Leaderboard(url);
const ui = new Ui();

leaderboard.getData(url);

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  leaderboard.addData(url, inputName.value, inputScore.value);
  inputName.value = '';
  inputScore.value = '';

  setTimeout(() => {
    leaderboard.getData(url);
  }, 1000);
});

refreshBtn.addEventListener('click', () => {
  leaderboard.getData(url);
  if (localStorage.getItem('list')) {
    const arr = JSON.parse(localStorage.getItem('list'));
    ui.display(arr);
  }
});