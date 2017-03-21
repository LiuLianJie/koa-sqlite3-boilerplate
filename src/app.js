/*
const foo = () => {
	return new Promise( (resolve, reject) => {
		setTimeout(() => {
			resolve("aaa");
		},2000);
	})
}

const boo = async () => {
	const a = await foo();
	console.log(a);
}

boo();
*/
//'use strict';

/*
import Koa from 'koa';
const app = new Koa();

app.use(ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);

export default app;
*/

import Koa from 'koa';
import routes from './routes';

const app = new Koa();



app.use(routes());
app.listen(3000);
export default app