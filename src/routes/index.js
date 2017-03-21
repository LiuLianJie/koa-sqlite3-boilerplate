'use strict';

import compose from 'koa-compose';
import Router from 'koa-router';

import RouterArticle from './article';

const router = new Router();

router.get('/',  (ctx, next) => {
	ctx.body = "sdfsdfadsfdfa";
});



router.use('/article', RouterArticle.routes(), RouterArticle.allowedMethods())

router.get('*', async (ctx, next) => {
    ctx.body = { status : 404 }
})

export default function routes() {
    return compose(
        [
            router.routes(),
            router.allowedMethods()
        ]
    )
}