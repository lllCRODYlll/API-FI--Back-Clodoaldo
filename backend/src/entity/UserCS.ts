import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class UserCS{


    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nomeJogo: string;
    
    @Column()
    genero: string;
    
    @Column()
    desenvolvedora:String;
    
    @CreateDateColumn()
    created_at:Date;

    @UpdateDateColumn()
    updated_at:Date;

}


