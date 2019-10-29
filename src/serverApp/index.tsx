import * as express from 'express';

const app = express();
console.log('server');

app.get('/', (req: express.Request, res: express.Response) => {
  res.send(`
<!DOCTYPE html>
<head>
  <title>ddouglascarr typescript starter</title>
</head>
<body>
  <div id="react-root"></div>
  <script type="text/javascript" src="http://localhost:8080/bundle.js"></script>
</body>
  `);
});

app.listen(3001, () => {
  console.log('server started');
});
