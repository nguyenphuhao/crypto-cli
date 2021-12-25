import * as csv from "fast-csv";
import * as fs from "fs";

export default async function arrayToCSV<T>(path: string, data: T[]) {
  return new Promise((resolve, reject) => {
    const ws = fs.createWriteStream(path);
    ws.on('error', reject);
    ws.on('end', resolve);
    csv.write(data, { headers: true }).pipe(ws);
  });
}
