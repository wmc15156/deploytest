console.log(123);

const express = require('express');
const app = express();

app.use('/', (req, res) => {
  console.log('hello node server');
})
app.listen(3000, () => {
  console.log('연결중')
})