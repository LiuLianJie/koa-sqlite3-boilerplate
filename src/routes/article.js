'use strict';

import Router from 'koa-router';

const router = new Router();

router.get('/', async (ctx, next) => {
	ctx.body = {
		"status" : "home"
	}
})

router.get("/add", async (ctx, next) => {
	ctx.body = {
		"status" : "add"
	}
})

export default router;