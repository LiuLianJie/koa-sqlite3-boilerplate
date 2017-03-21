'use strict';

import Router from 'koa-router';
import { run ,list} from '../models/article';

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

router.get("/list", async (ctx, next) => {
	let lists = await list();
	console.log(lists);
	ctx.body = {
		"status" : "list",
		"data" : JSON.stringify(lists)
	}
})

export default router;