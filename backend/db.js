import moongoose from 'mongoose';
const mongoURI = "mongodb://localhost:27017/"
const connectToMongo = ()=>{
    moongoose.connect(mongoURI);
}
export default connectToMongo;