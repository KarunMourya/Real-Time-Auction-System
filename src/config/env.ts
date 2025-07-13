import { z } from 'zod';
import 'dotenv/config';

const envSchema = z.object({
  DB_DATABASENAME: z.string(),
  DB_USERNAME: z.string(),
  DB_PASSWORD: z.string(),
  HOST: z.string(),
});

export const env = (() => {
  const result = envSchema.safeParse(process.env);
  if (!result.success) {
    console.error('❌ Invalid environment variables:', result.error.format());
    process.exit(1);
  }
  return result.data;
})();
