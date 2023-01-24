import { Task } from 'src/modules/tasks/entities/task.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    email?: string;

    @Column({default: false})
    isAdmin: boolean;

    @OneToMany(() => Task, task => task.createdBy)
    tasks: Task[];
}