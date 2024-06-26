function changeScore(team, points) {
    const scoreElement = document.getElementById(`${team}-score`);
    let score = parseInt(scoreElement.innerText);
    score += points;
    if (score < 0) score = 0; 
    scoreElement.innerText = score;
}
