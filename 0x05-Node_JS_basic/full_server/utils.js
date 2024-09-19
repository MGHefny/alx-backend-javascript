import fsync from 'fs';

/*
*function count student
*/
const countstu = (pathInfo) => new Promise((rsolv, rej) => {
  if (!pathInfo) {
    rej(new Error('Cannot load the database'));
  }
  if (pathInfo) {
    fsync.readFile(pathInfo, (eror, info) => {
      if (eror) {
        rej(new Error('Cannot load the database'));
      }
      if (info) {
        const repp = [];
        const Lfile = info.toString('utf-8').trim().split('\n');
        const stuG = {};
        const FnameData = Lfile[0].split(',');
        const stuPN = FnameData.slice(
          0,
          FnameData.length - 1,
        );

        for (const line of Lfile.slice(1)) {
          const stuR = line.split(',');
          const stuV = stuR.slice(
            0,
            stuR.length - 1,
          );
          const f = stuR[stuR.length - 1];
          if (!Object.keys(stuG).includes(f)) {
            stuG[f] = [];
          }
          const stuE = stuPN.map((PrN, x) => [
            PrN,
            stuV[x],
          ]);
          stuG[f].push(Object.fromEntries(stuE));
        }
        rsolv(repp.join('\n'));
      }
    });
  }
});

export default countstu;
module.exports = countstu;
