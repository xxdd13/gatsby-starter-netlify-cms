var express = require('express')
var app = express()
var path = require('path')

app.use(express.static('public'));

app.get('/api', function(req, res) {
  res.send('Hello World');
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log('Example app');
});
