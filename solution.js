async function sortHighestScores(filePath, numScores) {
  const data = await import(filePath);
  let parsedDataKeys = Object.keys(data.default);
  console.log(parsedDataKeys);
}

sortHighestScores("./sample.json", 3);
