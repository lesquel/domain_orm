import 'reflect-metadata';

import { AppDataSource } from './infrastructure/config/typeorm.config.js';

export async function bootstrap(): Promise<void> {
  try {
    const dataSource = await AppDataSource.initialize();
    console.log('Data source initialized with the following entities:');
    dataSource.entityMetadatas.forEach((metadata) => {
      console.log(`- ${metadata.name} (table: ${metadata.tableName})`);
    });
  } catch (error) {
    console.error('Failed to initialize data source', error);
    throw error;
  }
}

if (import.meta.main) {
  bootstrap().catch(() => process.exit(1));
}
