import mongoose from "mongoose"


const Connection = async()=>{

    const URL = `mongodb://umar:umar@ac-cz04aoi-shard-00-00.xfpv79p.mongodb.net:27017,ac-cz04aoi-shard-00-01.xfpv79p.mongodb.net:27017,ac-cz04aoi-shard-00-02.xfpv79p.mongodb.net:27017/?ssl=true&replicaSet=atlas-g3hg2s-shard-0&authSource=admin&retryWrites=true&w=majority`

    // const URL = `mongodb://${username}:${password}.@ac-cz04aoi-shard-00-00.xfpv79p.mongodb.net:27017,ac-cz04aoi-shard-00-01.xfpv79p.mongodb.net:27017,ac-cz04aoi-shard-00-02.xfpv79p.mongodb.net:27017/?ssl=true&replicaSet=atlas-g3hg2s-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true })
        console.log("Database conncted successfully")
    }catch(error){
        console.log("Error while Connecting with database",error)
        
    }
}

export default Connection;




 