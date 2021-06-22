async function sortHighestScores(filePath, numScores) {
  const data = await import(filePath);
  console.log(data);
}

sortHighestScores("./sample.json", 3);
