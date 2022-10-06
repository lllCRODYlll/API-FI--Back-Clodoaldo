import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class CS {


    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    anoLancamento: string;
    
    @Column()
    valorJogo: string;
    
    @CreateDateColumn()
    created_at:Date;

    @UpdateDateColumn()
    updated_at:Date;

}