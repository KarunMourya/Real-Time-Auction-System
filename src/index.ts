import express from 'express';
import { dbConnection } from './dbConnection';
import 'dotenv/config';

const app = express(); 

app.get('/ping', (req, res) => {
  res.status(200).send({
    data: [],
    message: 'Server setup properly',
    error: [],
  });
});

const PORT = process.env.PORT;

if (!PORT) {
  throw new Error('❌ PORT environment variable not defined');
}

app.listen(Number(PORT), async () => {
  await dbConnection();
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
