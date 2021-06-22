async function sortHighestScores(filePath, numScores) {
  const data = await import(filePath);
  let outputData;

  try {
    let dataKeys = Object.keys(data.default);
    let dataObjects = Object.values(data.default);

    dataKeys.sort().reverse();
    console.log(dataKeys);

    if (numScores > dataKeys.length) throw "numScores exceeds data length";
  } catch (err) {
    console.log(err);
  }
  return;
}

sortHighestScores("./sample.json", 10);
