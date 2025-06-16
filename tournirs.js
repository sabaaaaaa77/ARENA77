const apiUrl = "https://67daba6035c87309f52dbd79.mockapi.io/tournirs";


window.addEventListener("DOMContentLoaded", function () {
  fetch(apiUrl)
    .then(function (response) {
      if (!response.ok) {
        throw new Error("ვერ მივიღე ტურნირები სერვერიდან");
      }
      return response.json();
    })
    .then(function (data) {
      showTournaments(data);
    })
    .catch(function (error) {
      console.error("შეცდომა:", error);
      document.getElementById("tournament-list").innerHTML =
        "<p>დაფიქსირდა შეცდომა ტურნირების ჩატვირთვისას.</p>";
    });
});

function showTournaments(tournaments) {
  const container = document.getElementById("tournament-list");
  container.innerHTML = "";

  if (!Array.isArray(tournaments) || tournaments.length === 0) {
    container.innerHTML = "<p>ამ დროისთვის ტურნირები არ არის.</p>";
    return;
  }

  tournaments.forEach(function (tour) {
    const card = document.createElement("div");
    card.className = "tournament-card";
    card.innerHTML = `
      <h2>${tour.title}</h2>
      <p>თარიღი: ${tour.date}</p>
      <p>კონტაქტი: <a href="https://discord.gg/me27XK6Q${tour.contact}" target="_blank">${tour.contact}</a></p>
    `;
    container.appendChild(card);
  });
}
