import { Post, Request} from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { localAuthGuard } from './local.auth.guard';
import { UseGuards } from '@nestjs/common';

import { Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';


@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    // @UseGuards(localAuthGuard)
    // @Post('login')
    // Signup(@Request() req) {
    //     return {msg: 'logged in!'};
    // }


    // @UseGuards(AuthenticatedGuard)
    // @Get('protected')
    // getHello(@Request() req): string{
    //     return req.user;
    // }

    @UseGuards(localAuthGuard)
    @Post('access')
    login(@Request() req) {
        return this.authService.login(req.user); // TODO: return JWT access token.
    }

    @UseGuards(JwtAuthGuard)
    @Get('ok')
    getHi(@Request() req): string {  // TODO: require a bearer token, validate token.
        return req.user;
    }
    

}
