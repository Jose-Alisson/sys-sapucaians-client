import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

// Servir arquivos estáticos da pasta 'public'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '/dist/joliny-client/browser/')));

app.get('*/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/joliny-client/browser/', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});