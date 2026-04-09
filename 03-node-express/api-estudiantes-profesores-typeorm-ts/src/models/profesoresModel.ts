import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import { Cursos } from "./cursosModel";

@Entity("profesores")
export class Profesores {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    dni: string;

    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @Column()
    email: string;

    @Column()
    profesion: string;

    @Column()
    telefono: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => Cursos, (curso) => curso.profesor)
    // Mejora de claridad: el callback va mejor en singular (curso) y no (cursos)
    cursos: Cursos[];
}