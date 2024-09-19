/* 
* http manage server
*/
const http = require('http');
const fsync = require('fs');

const hostname = 'localhost';
const port = 1245;
const app = http.createServer();
const data = process.argv.length > 2 ? process.argv[2] : '';

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

        const AllStu = Object.values(stuG).reduce(
          (p, c) => (p || []).length + c.length,
        );
        repp.push(`Number of students: ${AllStu}`);
        for (const [f, g] of Object.entries(stuG)) {
          repp.push([
            `Number of students in ${f}: ${g.length}.`,
            'List:',
            g.map((stu) => stu.firstname).join(', '),
          ].join(' '));
        }
        rsolv(repp.join('\n'));
      }
    });
  }
});
/*
* function control server
*/
const handelsrv = [
  {
    route: '/',
    handler(_, response) {
      const resT = 'Hello Holberton School!';

      response.setHeader('Content-Type', 'text/plain');
      response.setHeader('Content-Length', resT.length);
      response.statusCode = 200;
      response.write(Buffer.from(resT));
    },
  },
  {
    route: '/students',
    handler(_, response) {
      const resP = ['This is the list of our students'];

      countstu(data)
        .then((reout) => {
          resP.push(reout);
          const resT = resP.join('\n');
          response.setHeader('Content-Type', 'text/plain');
          response.setHeader('Content-Length', resT.length);
          response.statusCode = 200;
          response.write(Buffer.from(resT));
        })
        .catch((eror) => {
          resP.push(eror instanceof Error ? eror.message : eror.toString());
          const resT = resP.join('\n');
          response.setHeader('Content-Type', 'text/plain');
          response.setHeader('Content-Length', resT.length);
          response.statusCode = 200;
          response.write(Buffer.from(resT));
        });
    },
  },
];
// run app
app.on('request', (req, response) => {
  for (const handlrou of handelsrv) {
    if (handlrou.route === req.url) {
      handlrou.handler(req, response);
      break;
    }
  }
});

app.listen(port, hostname, () => {
  process.stdout.write(`Server listening at -> http://${hostname}:${port}\n`);
});

module.exports = app;
