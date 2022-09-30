'use strict';

const app = require('./src/server.js');
const PORT = process.env.PORT || 3001;


app.listen(PORT, () => {
  console.log('App is running on PORT :: ' + PORT);
});
