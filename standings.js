const teams = [
  { name: "Team Alpha",   wins: 8, losses: 1, draws: 1 },
  { name: "Team Bravo",   wins: 7, losses: 2, draws: 1 },
  { name: "Team Charlie", wins: 6, losses: 2, draws: 2 },
  { name: "Team Delta",   wins: 5, losses: 4, draws: 1 },
  { name: "Team Echo",    wins: 4, losses: 4, draws: 2 },
  { name: "Team Foxtrot", wins: 3, losses: 6, draws: 1 },
  { name: "Team Golf",    wins: 2, losses: 7, draws: 1 },
  { name: "Team Hotel",   wins: 1, losses: 9, draws: 0 },
  { name: "Team Hotel",   wins: 1, losses: 9, draws: 0 },
  { name: "Team Hotel",   wins: 1, losses: 9, draws: 0 },
  { name: "Team Hotel",   wins: 1, losses: 9, draws: 0 },
  { name: "Team Hotel",   wins: 1, losses: 9, draws: 0 },
  { name: "Team Hotel",   wins: 1, losses: 9, draws: 0 },
  { name: "Team Hotel",   wins: 1, losses: 9, draws: 0 },
  { name: "Team Hotel",   wins: 1, losses: 9, draws: 0 },
  { name: "Team Hotel",   wins: 1, losses: 9, draws: 0 },
];

// Points: 3 per win, 1 per draw
const withPoints = teams
  .map(t => ({ ...t, points: t.wins * 2 + t.draws }))
  .sort((a, b) => b.points - a.points || b.wins - a.wins);

const tbody = document.getElementById("standings-body");

withPoints.forEach((team, i, arr) => {
  const rank = arr.findIndex(t => t.points === team.points) + 1;
  const tr = document.createElement("tr");
  if (rank <= 3) tr.classList.add(`rank-${rank}`);
  tr.innerHTML = `
    <td><span class="rank">${rank}</span></td>
    <td><span class="team-name">${team.name}</span></td>
    <td>${team.wins}</td>
    <td>${team.losses}</td>
    <td>${team.draws}</td>
    <td><span class="points">${team.points}</span></td>
  `;
  tbody.appendChild(tr);
});
