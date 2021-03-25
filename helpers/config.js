import environmentConfig from '../config/env.config';
const envConfig = environmentConfig[process.env.NODE_ENV];
export default envConfig;
