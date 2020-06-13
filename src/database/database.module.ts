import { Module } from '@nestjs/common';
import { MongoClient, Db, Logger } from 'mongodb';

@Module({
  providers: [
    {
      provide: 'DATABASE_CONNECTION',
      useFactory: async (): Promise<Db> => {
        try {
          Logger.setLevel('debug');

          const client = await MongoClient.connect('mongodb://127.0.0.1', {
            useUnifiedTopology: true,
          });

          const db = client.db('mydb');

          await db.collection('users').createIndex({ email: 1 }, { unique: true, sparse: true });

          return db;
        } catch (e) {
          throw e;
        }
      }
    },
  ],
  exports: ['DATABASE_CONNECTION'],
})
export class DatabaseModule {}
