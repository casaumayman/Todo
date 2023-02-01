import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const dbConfigs: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'database',
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'todo',
    synchronize: true,
    autoLoadEntities: true
}