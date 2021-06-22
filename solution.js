async function sortHighestScores(filePath, numScores) {
  const data = await import(filePath);
  const parsedData = Object.entries(data.default);
  let outputData = [];

  try {
    if (numScores > parsedData.length) throw "numScores exceeds data length";

    let scores = [];
    for (let i = 0; i < numScores; i++) {
      scores.push(parsedData[i][0]);
    }
    scores.sort().reverse();
    console.log(scores);
  } catch (err) {
    console.log(err);
  }
  return;
}

sortHighestScores("./sample.json", 3);
