const ENV = process.env

module.exports = {
  db_name: ENV.DEV_METRICS_DB_NAME,
  host: ENV.DEV_METRICS_DB_HOST,
  port: ENV.DEV_METRICS_DB_PORT,
  user: ENV.DEV_METRICS_DB_USERNAME,
  password: ENV.DEV_METRICS_DB_PASSWORD,
  R2_ENDPOINT: ENV.R2_ENDPOINT,
  R2_ACCESS_KEY_ID: ENV.R2_ACCESS_KEY_ID,
  R2_SECRET_ACCESS_KEY: ENV.R2_SECRET_ACCESS_KEY,
  GITHUB_API_KEY: ENV.GITHUB_API_KEY,
}