async function sortHighestScores(filePath, numScores) {
  const data = await import(filePath).then((data) => data.default);
  console.log(data);
  let outputData = [];

  try {
    if (numScores > data.length) throw "numScores exceeds data length";

    let dataKeys = Object.keys(data);
    console.log(dataKeys);

    for (let i = 0; i < numScores; i++) {}
  } catch (err) {
    console.log(err);
  }
  return;
}

sortHighestScores("./sample.json", 3);
