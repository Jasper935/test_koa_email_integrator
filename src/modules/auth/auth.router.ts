import authController from "./auth.controller";
import passport from "passport";
import Router from "koa-router";



export const router = new Router({ prefix: '/auth' });

router.get("/login", authController.generateSignInOutlookUrl);

// Обработка запроса на аутентификацию
router.get('/auth/outlook',
    passport.authenticate('oauth2', { session: false }) // Обработка аутентификации
);

// Обработка колбэка после аутентификации
router.get('/auth/outlook/callback',
    passport.authenticate('oauth2', {
        session: false,
        successRedirect: '/success',
        failureRedirect: '/error'
    }) // Обработка аутентификации
);

// Обработка успешной аутентификации
// @ts-ignore
router.get('/success', async (ctx) => {
    ctx.body = "Пользователь успешно аутентифицирован";
});

// Обработка ошибок аутентификации
// @ts-ignore
router.get('/error', async (ctx) => {
    ctx.body = "Ошибка аутентификации";
});

export default router;