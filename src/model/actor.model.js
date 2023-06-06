import mongoose from "mongoose";

const actorSchema = mongoose.Schema({
    actorName: { type: String, require: true }
})

const actor = mongoose.model("movies", actorSchema);

export default actor;