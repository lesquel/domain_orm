import 'reflect-metadata';

import { AppDataSource } from './infrastructure/config/typeorm.config.js';
import { EntityMetadata } from 'typeorm';

export async function bootstrap(): Promise<void> {
  try {
    const dataSource = await AppDataSource.initialize();
    console.log('Data source initialized with the following entities:');
    dataSource.entityMetadatas.forEach((metadata: EntityMetadata) => {
      console.log(`- ${metadata.name} (table: ${metadata.tableName})`);
    });
  } catch (error) {
    console.error('Failed to initialize data source', error);
    throw error;
  }
}

bootstrap().catch(() => process.exit(1));
