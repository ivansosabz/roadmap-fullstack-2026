import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { Profesores } from "./profesoresModel";
import { Estudiantes } from "./estudiantesModel";

@Entity("cursos")
export class Cursos {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column("text")
    descripcion: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => Profesores, (profesor) => profesor.cursos)
    @JoinColumn({ name: "profesor_id" })
    profesor: Profesores;

    @ManyToMany(() => Estudiantes, (estudiante) => estudiante.cursos)
    // Corrección importante:
    // JoinTable debe ir SOLO en un lado de la relación many-to-many.
    // Aquí decidimos que Cursos sea el lado dueño de la tabla intermedia.
    @JoinTable({
        name: "cursos_estudiantes",
        joinColumn: {
            name: "curso_id",
            referencedColumnName: "id",
        },
        inverseJoinColumn: {
            name: "estudiante_id",
            referencedColumnName: "id",
        },
    })
    estudiantes: Estudiantes[];
}