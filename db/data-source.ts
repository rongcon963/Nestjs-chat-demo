import { Chat } from "src/chat/entities/chat.entity";
import { DataSource, DataSourceOptions } from "typeorm";
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config();
 
const configService = new ConfigService();

export const dataSourceOption: DataSourceOptions = {
    type: 'postgres',
    host: configService.get('DB_HOST') || "localhost",
    port: configService.get('DB_PORT') || 5432,
    username: configService.get('DB_USERNAME') || "postgres",
    password: configService.get('DB_PASSWORD') || "postgres",
    database: configService.get('DB_NAME') || "postgres",
    entities: [Chat],
    migrations: ['dist/src/migrations/*.js'],
}

const dataSource = new DataSource(dataSourceOption);
export default dataSource;