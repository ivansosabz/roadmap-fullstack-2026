create table estudiantes (
    id int auto_increment,
    dni varchar(50),
    nombre varchar(50),
    apellido varchar(50),
    email varchar(50),
    primary key (id)
);

create table profesores (
    id int auto_increment,
    dni varchar(50),
    nombre varchar(50),
    apellido varchar(50),
    email varchar(50),
        profesion varchar(100),
    telefono varchar(50),
    primary key (id)
);

create table cursos (
    id int auto_increment,
    nombre varchar(50),
    descripcion text,
    profesor_id int,
    primary key (id)
);

alter table cursos
    add constraint cursos_profesores_FK
    foreign key (profesor_id)
    references cursos.profesores(id);

create table cursos_estudiantes (
    curso_id int,
    estudiante_id int,
    primary key (curso_id, estudiante_id)
);

alter table cursos_estudiantes
    add constraint cursos_estudiantes_curso_FK
    foreign key (curso_id)
    references cursos.cursos(id);

alter table cursos_estudiantes
    add constraint cursos_estudiantes_estudiantes_FK
    foreign key (estudiante_id)
    references cursos.estudiantes(id);

