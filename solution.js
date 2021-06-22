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
        if (!parsedJson.id) throw "No valid ID on object";
        outputData.push({
          score: parseInt(parsedData[i][0]),
          id: parsedJson.id,
        });
      } catch (err) {
        throw "No valid JSON found";
      }
    }

    const scores = [];
    const filteredOutput = outputData.filter((obj) => {
      const dupe = scores.includes(obj.score);
      scores.push(obj.score);
      return !dupe;
    });

    filteredOutput.sort((a, b) => (a.score < b.score ? 1 : -1));
    console.log(filteredOutput);
  } catch (err) {
    console.log(err);
  }
}

sortHighestScores("./sample.js", 5);
