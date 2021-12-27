import * as csv from "fast-csv";
import * as fs from "fs";

export default async function readCSV<T>(
  path: string,
  onData: (input: T) => void
) {
  return new Promise((resolve, reject) => {
    fs.createReadStream(path)
      .on("error", reject)
      .pipe(csv.parse({ headers: true }))
      .on("data", (data) => {
        onData(data);
      })
      .on("end", resolve)
      .on("error", reject);
  });
}
