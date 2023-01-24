import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const dbConfigs: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'casau',
    password: 'anhyeuem',
    database: 'todo',
    synchronize: true,
    autoLoadEntities: true
}