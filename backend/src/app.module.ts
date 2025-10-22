import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { TontinesModule } from './modules/tontines/tontines.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { ScoringModule } from './modules/scoring/scoring.module';
import { LoansModule } from './modules/loans/loans.module';


@Module({
imports: [
TypeOrmModule.forRoot(),
UsersModule,
AuthModule,
TontinesModule,
PaymentsModule,
ScoringModule,
LoansModule,
],
controllers: [],
providers: [],
})
export class AppModule {}