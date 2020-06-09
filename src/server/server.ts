import app from './app';

const SERVER_PORT = 9000;

app.use((req, res, next) => {
  setTimeout(next, 1000);
});

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));
