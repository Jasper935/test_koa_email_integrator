import Koa, { Context, Next } from 'koa';

import authRouter from "./modules/auth/auth.router";
import passport from "passport";
import {configurePassport} from "./modules/auth/passport";

const app = new Koa();




configurePassport();


app.use(authRouter.routes());
app.use(authRouter.allowedMethods());


const PORT = process.env.PORT || 3031;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});