
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];


export default config;