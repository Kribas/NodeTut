const { readFile, writeFile } = require("fs").promises;
// const utils = require("util");
// const readFilePromise = utils.promisify(readFile);
// const writeFilePromise = utils.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/second.txt", "utf8");
    await writeFile(
      "./content/result-mind-grenade",
      `THIS IS AWESOME ${first} - ${second}`,
      { flag: "a" }
    );
  } catch (error) {
    console.log(error);
  }
};
start();

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText("./content/first.txt")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
