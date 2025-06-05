import express from 'express'

import { Request, Response } from 'express';
import { env } from './env';
import routes from './http/routes';

const app = express();

app.use(express.json())
app.use(routes)

app.get('/', (req: Request, res: Response) => {
  res.json({ message: `Hello... I'm Crypto API` })
})

app.listen(env.PORT, () => console.log(`🚀 HTTP Server Running: http://localhost:${env.PORT}`))