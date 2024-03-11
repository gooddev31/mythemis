const allowedOrigin = require('./allowedOrigins');
type originCallback = (err?: Error | null, allow?: boolean) => void;
const corsConfig = {
    origin: (origin:string, callback:originCallback) => {
        if (allowedOrigin.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials: true,
    optionsSuccessStatus: 200
}
module.exports = corsConfig;