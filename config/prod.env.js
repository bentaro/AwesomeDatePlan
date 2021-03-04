'use strict'

module.exports = {
  NODE_ENV: '"development"',
  GOOGLE_API_KEY: `"${process.env.GOOGLE_API_KEY}"`,
  COSMIC_BUCKET: `"${process.env.COSMIC_BUCKET}"`,
  COSMIC_READ_KEY: `"${process.env.COSMIC_READ_KEY}"`,
  COSMIC_WRITE_KEY: `"${process.env.COSMIC_WRITE_KEY}"`,
  PORT: `"${process.env.PORT}"`
}
