import { createClient } from 'ioredis';

const redisClient = new createClient({
  password: '1ZqjTDzTxrgGoW5GE1JBeFNgwmL45MHj',
  host: 'redis-19098.c8.us-east-1-3.ec2.redns.redis-cloud.com',
  port: 19098,
});

redisClient.on('error', (err) => console.log('Redis Client Error', err));

export const redis = redisClient;