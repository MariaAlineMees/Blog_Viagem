const express = require('express');
const router = express.Router();

// Dados de categorias de exemplo
const categories = [
  { id: 1, name: 'Europa' },
  { id: 2, name: 'Ásia' },
  { id: 3, name: 'América do Norte' },
];

// Rota para listar todas as categorias
router.get('/', (req, res) => {
  res.json(categories);
});

module.exports = router;