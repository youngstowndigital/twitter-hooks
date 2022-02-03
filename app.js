
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post('/tweeted', (request, response) => {
    const { body } = request;
    console.log(body.tweet);
    response.send('success');
});

app.post('/followed', (request, response) => {
    const { body } = request;
    console.log(body.follower);
    response.send('success');
});

app.listen(port, () => {
    console.log(`Express api/webhook app listening at http://localhost:${port}`);
});
