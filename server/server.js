import express from 'express';
import mongoose from 'mongoose';
import shortUrl from './model/shortStore.js';

const app = express();

mongoose.connect("mongodb://localhost:27017/shorturlDB", {useNewUrlParser: true, useUnifiedTopology: true});

let query;

app.get('/', (req, res) => {
  res.send('Hello There!');
});

app.post('/short', async (req, res) => {
  await shortUrl.create({ full: req.body.fullUrl });
  query = await req.body.fullUrl;
});

app.get('/find', async (req, res) => {
  const found = await shortUrl.find({full: `${query}`});
  res.send(found);
});

app.get('/:shortUrl', async (req, res) => {
  const short = await shortUrl.findOne({ short: req.params.shortUrl });
  if (short == null) return res.sendStatus(404);
  res.redirect(shortUrl.full)
});

let port = process.env.PORT;
if (port == null || port == ""){
  port = 5000;
}

app.listen(port, function() {
  console.log("Server started successfully on port: ", port);
});