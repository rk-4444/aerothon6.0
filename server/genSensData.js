const fs = require("fs");
const csvParser = require("csv-parser");
const csvData = [];
function sensData() {
  fs.createReadStream("sensorData.csv")
    .pipe(csvParser({}))
    .on("data", (row) => csvData.push(row))
    .on("end", () => {
      //   console.log(csvData);
      setInterval(() => {
        let sz = csvData.length;
        let rn = Math.floor(Math.random() * sz);
        // console.log(rn);
        const obj = csvData[rn];
        const res = [];
        // Object.entries(obj).map((entry) => {
        //   let key = entry[0];
        //   let value = entry[1];
        //   res.push([key, value]);
        //   console.log(key, value);
        // });
        // console.log(obj);
      }, 3000);
    });
}

module.exports = { sensData, csvData };
