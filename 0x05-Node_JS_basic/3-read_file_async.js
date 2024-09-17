/*
 * read file synchronously
 */
const { readFile } = require('fs');

function countStudents(fName) {
  const stu = {};
  const f = {};
  let length = 0;
  return new Promise((res, rej) => {
    readFile(fName, (err, info) => {
      if (err) {
        rej(Error('Cannot load the database'));
      } else {
        const lines = info.toString().split('\n');
        for (let x = 0; x < lines.length; x += 1) {
          if (lines[x]) {
            length += 1;
            const fld = lines[x].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(stu, fld[3])) {
              stu[fld[3]].push(fld[0]);
            } else {
              stu[fld[3]] = [fld[0]];
            }
            if (Object.prototype.hasOwnProperty.call(f, fld[3])) {
              f[fld[3]] += 1;
            } else {
              f[fld[3]] = 1;
            }
          }
        }
        const len2 = length - 1;
        console.log(`Number of students: ${len2}`);
        for (const [key, value] of Object.entries(f)) {
          if (key !== 'field') {
            console.log(`Number of students in ${key}: ${value}. List: ${stu[key].join(', ')}`);
          }
        }
        res(info);
      }
    });
  });
}

module.exports = countStudents;
