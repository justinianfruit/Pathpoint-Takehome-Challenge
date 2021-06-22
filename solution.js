async function sortHighestScores(filePath, numScores) {
  let data = await import(filePath).then((data) => data.default.data);
  let parsedData = data.map((string) => string.split(": "));
  parsedData = parsedData.map((arr) => [arr.shift(), arr.join(": ")]);

  let outputData = [];

  try {
    if (numScores > parsedData.length) throw "numScores exceeds data length";

    for (let i = 0; i < numScores; i++) {
      try {
        let parsedJson = JSON.parse(parsedData[i][1]);
      } catch (err) {
        throw "No valid JSON found";
      }
    }
  } catch (err) {
    console.log(err);
  }
  return;
}

sortHighestScores("./sample.js", 3);
