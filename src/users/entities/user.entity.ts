import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Rol } from '../enums/rol.enum';
import { Faculty } from '../enums/faculty.enum';
import { Program } from 'src/program/entities/program.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  secondName?: string;

  @Column()
  firstLastName: string;

  @Column()
  secondLastName?: string;

  @Column({ nullable: true })
  birthDate: Date;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: false })
  phoneNumber: string;

  @Column()
  possition?: string;

  @Column({
    type: 'enum',
    enum: Rol,
  })
  rol: Rol;

  @Column({
    type: 'enum',
    enum: Faculty,
  })
  faculty: Faculty;
  // e.g.,
  @CreateDateColumn() //  'admin', 'user', etc.
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @Column({ default: true })
  isActive: boolean; // true or false, default is true

  @ManyToOne(() => Program, (program) => program.id)
  program: Program;
}
