import dotenv from "dotenv";

dotenv.config();

export default {
  getMongoUrl(dbName) {
    return `${process.env.MONGO_URL}/${dbName}?retryWrites=true&w=majority`;
  },
};
