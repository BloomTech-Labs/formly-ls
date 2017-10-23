// npm modules
import express from 'express';
import subdomain from 'express-subdomain';
import session from 'express-session';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

/* === Models === */
import { Application } from './models';

/* === Routes === */
import { getApplication } from './routes';
import { postApplication } from './routes';

const STATUS_USER_ERROR = 422;
const PORT = 3000;

const app = express();
const rootRouter = express.Router();
const apply = express.Router();
mongoose.connect('mongodb://localhost/lambda', { useMongoClient: true });

app.use(bodyParser.json());
app.use(express.static('public', {
  index: false
}));

// rootRouter.get('/*', (req, res) => res.redirect(307, 'http://apply.localhost.test:3000' + req.originalUrl));
// rootRouter.post('/*', (req, res) => res.redirect(307, 'http://apply.localhost.test:3000' + req.originalUrl));

rootRouter.get('/*', getApplication);
rootRouter.post('/*', postApplication);

apply.get('/*', getApplication);
apply.post('/', postApplication);


app.use(subdomain('apply', apply));
app.use(subdomain('*', rootRouter));
app.listen(PORT);
console.log(`Server running at http://localhost:${PORT}/`);

export default app;

export const handleUserError = (message, res) => {
  res.status(STATUS_USER_ERROR).send(message);
};
