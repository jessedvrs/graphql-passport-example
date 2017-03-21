import http from 'http';
import express from 'express';
import authMiddleware from './middlewares/auth';
import graphqlMiddleware from './middlewares/graphql';

const HOST = '0.0.0.0';
const PORT = 4000;

const app = express();
app.use(authMiddleware);
app.use('/api/graphql', graphqlMiddleware);

http.createServer(app).listen(PORT, HOST, () => {
    console.log(`Listening on http://${HOST}:${PORT}`);
});
