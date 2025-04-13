import moongoose from 'mongoose';
const mongoURI = "mongodb+srv://ukgprojects:aXetHNTPVWRCkMrU@cluster0.gffxi5g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectToMongo = ()=>{
    moongoose.connect(mongoURI);
}
export default connectToMongo;
