import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { localStrategy } from './local.strategy';
import { PassportModule} from '@nestjs/passport';
import { SessionSerializer } from './session.serializer';
import { JwtModule } from '@nestjs/jwt';
import { jwtStrategy } from './jwt.strategy';




@Module({
  imports: [UsersModule, PassportModule.register({session: true}), JwtModule.register({
    secret: 'SECRET', //put env variables
    signOptions: { expiresIn: '60s'}, 
  })],
  
  providers: [AuthService, localStrategy, SessionSerializer, jwtStrategy],
  controllers: [AuthController],
  exports: [AuthService]
})
export class AuthModule {}
