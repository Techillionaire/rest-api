// const mongoose = require("mongoose")
// const dotenv = require("dotenv").config()

// const connectDB = async () => {
//     try{
//         const connect = await mongoose.connect(process.env.MONGODB_URI)
//         console.log(`Database connected successfully at: ${connect.connection.host}`)
//     } catch(err) {
//         console.err(err)
//         process.exit(1)
//     }
// }

// module.exports = connectDB

const mongoose = require("mongoose")
const dotenv = require("dotenv").config()

const connectDB = () => {
  return mongoose.connect("mongodb+srv://kingsleyifeanyi9life:owonikoko@cluster0.pvuoskb.mongodb.net/")
    .then(() => {
      console.log(`Database connected successfully`)
    })
    .catch((err) => {
      console.log(err)
      process.exit(1)
    })
}

module.exports = connectDB
