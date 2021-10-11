import express from 'express';

const app = express()

app.get(
    '/',
     (req, resp) => {
        resp.send('hello');
})

app.listen(12345, () => {
    console.log('listening 12345');
})