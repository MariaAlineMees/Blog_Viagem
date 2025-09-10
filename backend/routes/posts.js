const express = require('express');
const router = express.Router();

// Dados de postagens de exemplo
const posts = [
  { id: 1, title: 'Paris: Cidade Luz', content: 'Uma viagem inesquecível...', categoryId: 1, date: '2025-08-20' },
  { id: 2, title: 'Aventura na Tailândia', content: 'Praias paradisíacas e templos...', categoryId: 2, date: '2025-08-15' },
  { id: 3, title: 'Roteiro de 7 dias em Roma', content: 'História e gastronomia...', categoryId: 1, date: '2025-08-10' },
];

// Rota para listar todas as postagens
router.get('/', (req, res) => {
  res.json(posts);
});

// Rota para buscar uma postagem pelo ID
router.get('/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find(p => p.id === postId);

  if (post) {
    res.json(post);
  } else {
    res.status(404).send('Postagem não encontrada.');
  }
});

module.exports = router;