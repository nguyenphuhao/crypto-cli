import * as fs from "fs";
import es from "event-stream";
import { Delimeters } from "../constanst";
import isEmpty from "lodash/isEmpty";

export default async function readCSV<T>(
  path: string,
  onData: (input: T) => void
) {
  return new Promise((resolve, reject) => {
    let count = 0;
    let headers: string[];
    fs.createReadStream(path)
      .pipe(es.split())
      .pipe(
        es.mapSync(function (line: string) {
          const data = line.split(Delimeters.COMMA);
          if (count === 0) {
            headers = data;
          } else {
            let obj: any = {};
            if (!isEmpty(data)) {
              for (let index = 0; index < headers.length; index++) {
                const prop = headers[index];
                obj[prop] = data[index];
              }
              onData(obj);
            }
          }
          count++;
        })
      )
      .on("error", reject)
      .on("end", () => resolve(count))
      .on("error", reject);
  });
}
