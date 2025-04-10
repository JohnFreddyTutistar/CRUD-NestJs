import { Module } from '@nestjs/common';
import { EdutrackModule } from './edutrack/edutrack.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ProgramModule } from './program/program.module';
import { AcademicScheduleModule } from './academic-schedule/academic-schedule.module';
import { InscriptionModule } from './inscription/inscription.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    EdutrackModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host:  process.env.DB_HOST, 
      port: parseInt(process.env.DB_PORT || '5432', 10), 
      username: process.env.DB_USER, 
      password: process.env.DB_PASSWORD, 
      database:  process.env.DB_NAME, 
      autoLoadEntities: true,
      synchronize: true
    }),
    UsersModule,
    AuthModule,
    ProgramModule,
    AcademicScheduleModule,
    InscriptionModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
