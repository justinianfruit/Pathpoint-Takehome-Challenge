async function sortHighestScores(filePath, numScores) {
  const data = await import(filePath);
  const parsedData = Object.entries(data.default);
  let outputData = [];

  try {
    if (numScores > parsedData.length) throw "numScores exceeds data length";

    let scores = [];
    for (let i = 0; i < numScores; i++) {
      try {
        JSON.parse(JSON.stringify(parsedData[i][1]));
      } catch (err) {
        throw "Invalid JSON format";
      }
      if (!parsedData[i][1].id) throw "No valid ID found on object";
      outputData.push({ score: parsedData[i][0], id: "" });
    }
  } catch (err) {
    console.log(err);
  }
  return;
}

sortHighestScores("./sample.json", 5);
