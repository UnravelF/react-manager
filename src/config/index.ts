/**
 * 环境配置封装
 * 运行时环境处理
 */

type ENV = 'stg' | 'prd' | 'dev';

let env: ENV = 'dev';

if (location.host.indexOf('http://localhost')) {
  env = 'dev'
} else if(location.host === 'driver-stg.marsview.cc') {
  env = 'stg'
} else {
  env = 'prd'
}

const config = {
  dev: {
    baseApi: '/api',
    uploadApi: 'http://api-driver-dev.marsview.cc',
    cdn: 'http://xxx.aliyun.com',
    mock: false,
    mockApi: 'http://www.mock-xxxx.com'
  },
  stg: {
    baseApi: '/api',
    uploadApi: 'http://api-driver-stg.marsview.cc',
    cdn: 'http://xxx.aliyun.com',
    mock: false,
    mockApi: 'http://www.mock-xxxx.com'
  },
  prd: {
    baseApi: '/api',
    uploadApi: 'http://api-driver.marsview.cc',
    cdn: 'http://xxx.aliyun.com',
    mock: false,
    mockApi: 'http://www.mock-xxxx.com'
  },
}



export default {
  env,
  ...config[env]
};
