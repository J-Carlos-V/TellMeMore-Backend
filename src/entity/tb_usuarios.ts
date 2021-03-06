import {Entity, PrimaryGeneratedColumn,Unique,CreateDateColumn, UpdateDateColumn, Column, IsNull} from "typeorm";
import {MinLength, IsNotEmpty, IsEmail} from 'class-validator';

export enum UsuarioGenero{
    FEMENINO = "F",
    MASCULINO = "M"
}

export enum UsuarioTipo{
    ADMIN = "Admin",
    LOG = "Logueado",
    VISIT = "Visitante"
}
@Entity()
export class tb_usuarios {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "int",
        nullable: false,
    })
    
    Matricula: number;

    @Column({
        type: "varchar",
        length: 60,
        nullable: false
    })
    
    Nombre: string;

    @Column({
        type: "varchar",
        length: 45,
        nullable: false
    })
    
    Apellido_Paterno: string;

    @Column({
        type: "varchar",
        length: 45,
        nullable: true
    })
    Apellido_Materno: string;

    @Column({
        type:"enum",
        enum: UsuarioGenero,
        nullable: false,
        default: UsuarioGenero.FEMENINO
    })
    Genero: UsuarioGenero;

    @Column({
        type: "varchar",
        length: 70,
        nullable: false
    })
    Email: string;

    @Column({
        type: "varchar",
        length: 50,
        nullable: false
    })
    Contrasena: string;

    @Column({
        type: "enum",
        enum: UsuarioTipo,
        nullable: false,
        default: UsuarioTipo.VISIT
    })
    Tipo: UsuarioTipo;

    @Column({
        type: "varchar",
        length: 200,
        nullable: true
    })
    ImagenU: string;




}
