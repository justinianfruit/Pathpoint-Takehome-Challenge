async function sortHighestScores(filePath, numScores) {
  let fileReader = new FileReader();
  fileReader.readAsText(filePath);
  console.log(fileReader.result);
  //console.log(data);
  let outputData = [];

  // try {
  //   if (numScores > data.length) throw "numScores exceeds data length";

  //   for (let i = 0; i < numScores; i++) {}
  // } catch (err) {
  //   console.log(err);
  // }
  return;
}

sortHighestScores("./sample.txt", 3);
