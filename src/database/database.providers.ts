import { ConfigService } from 'src/config/config.service';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION_POSTGRES', // Cambiado para que coincida
    inject: [ConfigService],
    useFactory: (config: ConfigService) => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: config.get('HOST') || 'localhost',
        port: +config.get('PORT_BD') || 5432, // Asegúrate de que PORT_BD sea correcto
        username: config.get('USERNAME') || 'root',
        password: config.get('PASSWORD') || 'prueba',
        database: config.get('DATABASE'), // Corrige el typo aquí (DATABSE -> DATABASE)
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true, // Cambiar a false en producción
      });

      return dataSource.initialize();
    },
  },
];
