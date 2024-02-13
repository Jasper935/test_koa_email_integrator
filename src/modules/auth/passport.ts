import passport from 'passport';
// @ts-ignore
import { Strategy as OAuth2Strategy } from "passport-oauth2";

export function configurePassport() {

    passport.use('oauth2', new OAuth2Strategy({
        authorizationURL: `https://login.microsoftonline.com/${process.env.MS_TENANT_ID}/oauth2/v2.0/authorize`,
        tokenURL: `https://login.microsoftonline.com/${process.env.MS_TENANT_ID}/oauth2/v2.0/token`,
        clientID: process.env.MS_CLIENT_ID,
        clientSecret: process.env.MS_CLIENT_SECRET,
        callbackURL: 'http://localhost:3000/auth/outlook/callback',
        scope: process.env.MS_SCOPE?.split(' ')
        // @ts-ignore
    }, (accessToken, refreshToken, profile, done) => {
        console.log("accessToken, refreshToken, profile, done", accessToken, refreshToken, profile, done);
    }));
}