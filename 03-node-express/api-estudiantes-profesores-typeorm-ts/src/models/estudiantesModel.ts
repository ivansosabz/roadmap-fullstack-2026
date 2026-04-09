import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    BaseEntity
} from "typeorm";
import { Cursos } from "./cursosModel";

@Entity("estudiantes")
export class Estudiantes extends BaseEntity {
    @PrimaryGeneratedColumn()
    // Corrección: number en vez de Number
    id: number;

    @Column()
    // Corrección: string en vez de String
    dni: string;

    @Column({ length: 50 })
    // Corrección: string en vez de String
    nombre: string;

    @Column()
    // Corrección: string en vez de String
    apellido: string;

    @Column()
    // Corrección: string en vez de String
    email: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToMany(() => Cursos, (curso) => curso.estudiantes)
    // Corrección importante:
    // aquí NO debe ir JoinTable porque ya está del lado de Cursos.
    cursos: Cursos[];
}