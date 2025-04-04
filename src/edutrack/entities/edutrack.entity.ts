import { Column, DeleteDateColumn, Entity, UpdateDateColumn } from "typeorm";

@Entity()
export class Edutrack {

    // @PrimaryGeneratedColumn()
    @Column({ primary: true, generated: true })
    id: number;
    
    @Column()
    name: string;
    
    @Column({ unique: true, nullable: true })
    email: string;

    @Column()
    age: number

    @Column()
    password: string;

    @Column({ nullable: true })
    birthDate: Date

    @DeleteDateColumn()
    deleteDateColumn?: Date

    @UpdateDateColumn()
    updateDateColumn?: Date

}
