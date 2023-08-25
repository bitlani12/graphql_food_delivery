import mongoose from 'mongoose';

export const connectDB = async () => {
  const conn: { connection: { host: string } } = await mongoose.connect('mongodb+srv://mukesh:Bitlani%4012@cluster0.z0ubkp7.mongodb.net/food_delivery?retryWrites=true&w=majority');

  console.log(`Mongodb connected: ${conn.connection.host}`)
}