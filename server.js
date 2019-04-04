const express = require('express');
const path = require('path');


const app = express();


const appPath = path.join(__dirname, 'dist');
app.use(express.static(appPath));
app.get('*', function(req, res) {
    res.sendFile(path.resolve(appPath, 'index.html'));
});

const PORT = process.env.PORT || 3001;

app.listen(PORT , function() {
  console.log(`App is running on port ${PORT}`);
});
