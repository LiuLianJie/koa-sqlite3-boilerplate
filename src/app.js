import Koa from 'koa';
import routes from './routes';
import cors from 'koa-cors';
import convert from 'koa-convert';
//require("./models/article");


const app = new Koa();

app.use(convert(cors()));

app.use(routes());
app.listen(3000);
export default app