import environmentConfig from '../config/env.config';
const configHelper = environmentConfig[process.env.NODE_ENV];
export default configHelper;
