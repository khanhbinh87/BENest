import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './password/local.strategy';
@Module({
  providers: [AuthService, LocalStrategy],
  imports: [UsersModule, PassportModule],
})
export class AuthModule {}
