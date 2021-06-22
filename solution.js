async function sortHighestScores(filePath, numScores) {
  const data = await import(filePath);
  let outputData = [];

  try {
    if (numScores > data.default.length) throw "numScores exceeds data length";

    let dataKeys = Object.keys(data.default);
    console.log(dataKeys);

    for (let i = 0; i < numScores; i++) {}
  } catch (err) {
    console.log(err);
  }
  return;
}

sortHighestScores("./sample.json", 3);
