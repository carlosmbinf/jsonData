const express = require('express');
const app = express();
const PORT = 3000;

app.get('/get_data', (req, res) => {
  res.json({
    clave1: 'valor1',
    clave2: 'valor2',
    clave3: 'valor3'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
