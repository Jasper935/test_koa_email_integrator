import {Context} from "koa";
import passport from 'passport';
// import {Strategy, Strategy as OutlookStrategy} from 'passport-outlook';
import dotenv from 'dotenv';

// import './types/passport-outlook'
// @ts-ignore
import {Strategy as OAuth2Strategy} from "passport-oauth2";
import {configurePassport} from "./passport";

dotenv.config();
console.log("process.env.MS_CLIENT_ID", process.env.MS_CLIENT_ID)
class AuthService {
    async generateSignInOutlookUrl(ctx: Context) {
        const OUTLOOK_CLIENT_ID = process.env.MS_CLIENT_ID;
        const OUTLOOK_CLIENT_SECRET = process.env.MS_CLIENT_SECRET;
        const MS_TENANT_ID = process.env.MS_TENANT_ID;
        const CALLBACK_URL = 'http://localhost:3000/auth/outlook/callback';
        const MS_SCOPE = process.env.MS_SCOPE;
        const url = '/auth/outlook'; // Этот путь должен соответствовать вашему пути для обработки аутентификации

        try {
            configurePassport();
        } catch (e) {
            console.log("AuthService generateSignInOutlookUrl error", e)
        }
        ctx.body = {url};
    };
}

export default new AuthService()