async function sortHighestScores(filePath, numScores) {
  const data = await import(filePath);
  const parsedData = Object.entries(data.default);
  let outputData = [];

  try {
    if (numScores > parsedData.length) throw "numScores exceeds data length";

    let dataKeys = Object.keys(data.default);

    for (let i = 0; i < numScores; i++) {
      //if (!JSON.parse(data.default[i])) throw "No valid JSON found";
    }

    dataKeys.sort().reverse();
    dataKeys.forEach((key) => {});
  } catch (err) {
    console.log(err);
  }
  return;
}

sortHighestScores("./sample.json", 3);
