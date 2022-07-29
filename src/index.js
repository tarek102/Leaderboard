import Leaderboard from './modules/Leaderboard';
import './style.css';

// Variables

const submitBtn = document.querySelector('#submit-btn');
const inputScore = document.querySelector('#input-score');
const inputName = document.querySelector('#input-name');
const refreshBtn = document.querySelector('#refresh-btn');
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/a1N4fJIEz5DoPARzxJxn/scores/';
const leaderboard = new Leaderboard(url);

leaderboard.getData(url);

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (inputName.value === '' || inputScore.value === '') return;
  leaderboard.addData(url, inputName.value, inputScore.value);

  inputName.value = '';
  inputScore.value = '';
});

refreshBtn.addEventListener('click', async () => {
  const listArray = await leaderboard.getData(url);

  const listToRemove = document.querySelectorAll('.new-li');
  listToRemove.forEach((removeLi) => {
    removeLi.remove();
  });

  listArray.forEach((list) => {
    const scoreList = document.querySelector('.score-list');
    const newLi = document.createElement('li');
    newLi.classList.add('new-li');
    newLi.innerHTML += `Name: ${list.user} : ${list.score}`;
    scoreList.appendChild(newLi);
  });
});