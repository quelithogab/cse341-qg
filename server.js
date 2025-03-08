const express = require('express');
const app = express();
 
app.get('/', (req, res) => {
  res.send(" Hello Quelitho Gabriel")
});
 
const PORT = 3000;

app.listen(process.env.PORT || PORT);
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
