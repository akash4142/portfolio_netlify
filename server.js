const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000; // You can change this to your desired port number

// Define a route
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
