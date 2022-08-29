import "dotenv/config";

export const config = {
    SERVER_PORT: process.env.SERVER_PORT || 8000,
    GROUP_PORT: process.env.GROUP_PORT || 3005,
    PERSON_PORT:  process.env.PERSON_PORT || 3006,
    CONNECT:process.env.MONGO_DB_URL ||'mongodb://mongo:27017/OverlapTask',
    IMAGE_GROUP:process.env.IMAGE_GROUP || "imagegroup",
    IMAGE_PERSON:process.env.IMAGE_PERSON || "imageperson",
    ADRESS1:process.env.ADRESS1 || "http://group:3005/api/group" ,
    ADRESS2:process.env.ADRESS2 || "http://person:3006/api/person" ,
}