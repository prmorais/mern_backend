import express from 'express';
import morgan from 'morgan';

import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.get('/rest', (req, res) => {
	res.json({
		data: 'Endpoint raiz rest'
	});
});

app.listen(process.env.PORT, () => console.log('Servidor rodando na porta:', process.env.PORT));
