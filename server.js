const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.set('port', process.env.PORT || 8080);

const server = app.listen(app.get('port'), function () {
  console.log('listening on port ', server.address().port);
});
