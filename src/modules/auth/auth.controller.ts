import {IUser} from "./types/types";
import authService from "./auth.service";
import {Context} from "koa";


// const users: IUser[] = [
//     {id: 1, name: 'John Doe'},
//     {id: 2, name: 'Jane Smith'},
// ]

class AuthController {
    async generateSignInOutlookUrl(ctx: Context) {
        await authService.generateSignInOutlookUrl(ctx)
    }
}

export default new AuthController()