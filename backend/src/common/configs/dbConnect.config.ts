import mongoose from 'mongoose';

const dbConnectConfig = async () => {
  try {
    await mongoose.connect(String(process.env.DB_LINK));
  } catch (e) {
    console.log(e);
  }
};

export default dbConnectConfig;
