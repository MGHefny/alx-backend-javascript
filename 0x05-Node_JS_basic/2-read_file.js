/*
 * file synchronously
 */
const fsync = require('fs');

function countStudents(fName) {
  const stu = {};
  const f = {};
  let length = 0;
  try {
    const fCon = fsync.readFileSync(fName, 'utf-8');
    const lin = fCon.toString().split('\n');
    for (let x = 0; x < lin.length; x += 1) {
      if (lin[x]) {
        length += 1;
        const fld = lin[x].toString().split(',');
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
  } catch (err) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
