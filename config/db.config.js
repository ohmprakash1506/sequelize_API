import "dotenv/config";

const dbConfig = {
  USERNAME: process.env.DB_USERNAME,
  PASSWORD: process.env.DB_PASSWORD,
  DATABASE: process.env.DB_DATABASE,
  HOST: process.env.DB_HOST,
  DIALECT: "mysql",
  POOL: {
    MAX: process.env.DB_MAX,
    MIN: process.env.DB_MIN,
    ACQUIRE: process.env.DB_ACQUIRE,
    IDLE: process.env.DB_IDLE,
  },
};

export default dbConfig;
