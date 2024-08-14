const path = require('path');


const nextConfig = {
  reactStrictMode: false,
  env: {
    // BACKEND_URL: 'https://cronjob-yr9s.onrender.com/', 
    BACKEND_URL: 'https://clownfish-app-jn7w9.ondigitalocean.app/desikahaniya/', 
    CLOUDFLARE_WORKER:'https://my-worker.ukdevelopers007.workers.dev/desikahaniya/',  
    CLOUDFLARE_R2_AUDIOSTORY:'https://pub-46cdeefeaf774247ab99232ab1ebaa66.r2.dev/Audio_sex_stories/',  
    // BACKEND_URL: 'http://localhost:5000/desikahaniya/', 
   // FRONTEND_URL: 'http://localhost:3000/', 
     FRONTEND_URL: 'http://Hindisexstory.app/',
    FACEBOOK_APP_SECRET:'4c30ed043dbfc9e5b59e9db484283609',
    FACEBOOK_APP_ID:'1762910734100962',
    GOOGLE_CLIENT_ID:'737624608726-qa70ffm7anrn03v0qu8pgoed8bcfsfk5.apps.googleusercontent.com',
    GOOGLE_CLIENT_SECRET:'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',
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },

}

module.exports = nextConfig
