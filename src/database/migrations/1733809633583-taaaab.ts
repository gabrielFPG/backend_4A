import { MigrationInterface, QueryRunner } from "typeorm";

export class Taaaab1733809633583 implements MigrationInterface {
    name = 'Taaaab1733809633583'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "mail" TO "email"`);
        await queryRunner.query(`ALTER TABLE "clientes" DROP COLUMN "nombre_completa"`);
        await queryRunner.query(`ALTER TABLE "pedido_producto" DROP COLUMN "producoId"`);
        await queryRunner.query(`ALTER TABLE "productos" DROP COLUMN "imagen"`);
        await queryRunner.query(`ALTER TABLE "clientes" ADD "nombre_completo" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "productos" ADD "image" character varying(250)`);
        await queryRunner.query(`ALTER TABLE "clientes" DROP COLUMN "dni"`);
        await queryRunner.query(`ALTER TABLE "clientes" ADD "dni" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pedido_producto" DROP CONSTRAINT "FK_da007c96a1af3dbf6a925bf6581"`);
        await queryRunner.query(`ALTER TABLE "pedido_producto" ALTER COLUMN "productoId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categoria" DROP COLUMN "nombre"`);
        await queryRunner.query(`ALTER TABLE "categoria" ADD "nombre" character varying(50)`);
        await queryRunner.query(`ALTER TABLE "categoria" DROP COLUMN "detalle"`);
        await queryRunner.query(`ALTER TABLE "categoria" ADD "detalle" text`);
        await queryRunner.query(`ALTER TABLE "productos" DROP COLUMN "nombre"`);
        await queryRunner.query(`ALTER TABLE "productos" ADD "nombre" character varying(250) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "productos" DROP COLUMN "precio"`);
        await queryRunner.query(`ALTER TABLE "productos" ADD "precio" numeric(10,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "productos" DROP COLUMN "descripcion"`);
        await queryRunner.query(`ALTER TABLE "productos" ADD "descripcion" text`);
        await queryRunner.query(`ALTER TABLE "productos" ALTER COLUMN "estado" SET DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "pedido_producto" ADD CONSTRAINT "FK_da007c96a1af3dbf6a925bf6581" FOREIGN KEY ("productoId") REFERENCES "productos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pedido_producto" DROP CONSTRAINT "FK_da007c96a1af3dbf6a925bf6581"`);
        await queryRunner.query(`ALTER TABLE "productos" ALTER COLUMN "estado" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "productos" DROP COLUMN "descripcion"`);
        await queryRunner.query(`ALTER TABLE "productos" ADD "descripcion" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "productos" DROP COLUMN "precio"`);
        await queryRunner.query(`ALTER TABLE "productos" ADD "precio" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "productos" DROP COLUMN "nombre"`);
        await queryRunner.query(`ALTER TABLE "productos" ADD "nombre" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categoria" DROP COLUMN "detalle"`);
        await queryRunner.query(`ALTER TABLE "categoria" ADD "detalle" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categoria" DROP COLUMN "nombre"`);
        await queryRunner.query(`ALTER TABLE "categoria" ADD "nombre" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pedido_producto" ALTER COLUMN "productoId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pedido_producto" ADD CONSTRAINT "FK_da007c96a1af3dbf6a925bf6581" FOREIGN KEY ("productoId") REFERENCES "productos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "clientes" DROP COLUMN "dni"`);
        await queryRunner.query(`ALTER TABLE "clientes" ADD "dni" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "productos" DROP COLUMN "image"`);
        await queryRunner.query(`ALTER TABLE "clientes" DROP COLUMN "nombre_completo"`);
        await queryRunner.query(`ALTER TABLE "productos" ADD "imagen" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pedido_producto" ADD "producoId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "clientes" ADD "nombre_completa" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "email" TO "mail"`);
    }

}
