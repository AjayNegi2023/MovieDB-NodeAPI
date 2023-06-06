import mongoose from "mongoose";

const movieSchema = mongoose.Schema({
    moviename : {type: String , require : true },   
    category : {type: String , require : true },   
    actors : [{type: mongoose.Schema.Types.ObjectId ,ref :"users" }]   
})

const movie = mongoose.model("movies",movieSchema);

export default movie;