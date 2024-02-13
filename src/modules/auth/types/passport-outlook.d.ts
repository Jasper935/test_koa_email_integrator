declare module 'passport-outlook' {
    import { Strategy } from 'passport';

    export interface OutlookOptions {
        clientID: string|undefined;
        clientSecret: string|undefined;
        callbackURL: string;
        tenant?: string;
        skipUserProfile?: boolean;
        passReqToCallback?: boolean;
        scope?: string | string[];
    }

    export class Strategy implements Strategy {
        constructor(options: OutlookOptions, verify: (accessToken: string, refreshToken: string, profile: any, done: (error: any, user?: any, info?: any) => void) => void);
        name: string;
    }
}