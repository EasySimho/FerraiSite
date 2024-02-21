const express = require('express');
const path = require('path'); // Importa il modulo path

const app = express();
const port = 8080;

// Serve i file statici dalla directory 'public'
app.use(express.static('public'));

// Route per la radice del server
app.get('/', (req, res) => {
  // Invia il file 'index.html' come risposta
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
