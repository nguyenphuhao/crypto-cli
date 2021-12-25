import * as csv from "fast-csv";
import * as fs from "fs";

export default async function csvToArray<T>(path: string): Promise<T[]> {
  return new Promise((resolve, reject) => {
    const results: T[] = [];
    fs.createReadStream(path)
      .pipe(csv.parse({ headers: true }))
      .on("data", (data) => results.push(data))
      .on("end", () => {
        resolve(results);
      })
      .on("error", reject);
  });
}
