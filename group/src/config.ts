import "dotenv/config";

export const config = {
    SERVER_PORT:process.env.SERVER_PORT || 3005,
    CONNECT:process.env.MONGO_DB_URL || 'mongodb://mongo:27017/OverlapTask'
}
