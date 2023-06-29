const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'))

server.use(async (req, res, next) => {
  await new Promise(resolve => {
    setTimeout(resolve, 800)
  });
  next();
})

server.use((req, res, next) => {
  if (!req.headers.autorization) {
    return res.status(403).json({ message: 'Ошибка авторизации' });
  }

  next();
})

server.use(jsonServer.defaults());
server.use(router);
server.post('login', (req, res) => {
  const { username, password } = req.body;
  const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'utf-8'));
  const { users } = db;

  const userFromBd = users.find(
    (user) => user.username === username && user.password === password
  )

  if (userFromBd) {
    return res.json(userFromBd)
  }

  return res.status(403).json({ message: 'Ошибка авторизации' })
})

server.listen(8080, () => {
  console.log('server is running on 8080 port');
})