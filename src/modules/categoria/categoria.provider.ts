import { DataSource } from "typeorm";
import { Categoria } from "./entities/categoria.entity";

export const categoriaProviders=[
    {
        provide:'CATEOGRA_REPOSITORY',
        useFactory: (dataSource:DataSource)=>dataSource.getRepository(Categoria),
        inject:['DATABASE_CONNECTOIN_POSTGRES']
    }
]