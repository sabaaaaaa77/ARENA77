document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.getElementById('burger-btn');
  const nav = document.getElementById('main-nav');

  burgerBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
});


const cs2Data = [
  { player: "Player1"  },
  { player: "Player2" },
  { player: "Player3"  },
  { player: "Player4"  },
];

const valorantData = [
  { player: "Player1"  },
  { player: "Player2" },
  { player: "Player3"  },
  { player: "Player4"  },
];

const pubgData = [
 { player: "Player1"  },
  { player: "Player2" },
  { player: "Player3"  },
  { player: "Player4"  },
];

function fillLeaderboard(data, containerId) {
  const ul = document.querySelector(`#${containerId} ul`);
  ul.innerHTML = '';
  data.forEach((entry, i) => {
    const li = document.createElement('li');
    li.textContent = `${i + 1}. ${entry.player} - ${entry.score} pts`;
    ul.appendChild(li);
  });
}

// მონაცემების ჩატვირთვა გვერდის ჩატვირთვაზე
window.addEventListener('DOMContentLoaded', () => {
  fillLeaderboard(cs2Data, 'cs2-leaderboard');
  fillLeaderboard(valorantData, 'valorant-leaderboard');
  fillLeaderboard(pubgData, 'pubg-leaderboard');
});



