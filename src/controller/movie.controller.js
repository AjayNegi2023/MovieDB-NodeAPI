import express from 'express';
import Movie from "../model/movies.model.js";
import isAdminAuthorized from '../middleware/auth.middleware.js';
const Router = express.Router();

Router.post("/create",isAdminAuthorized ,async (req, res) => {
    try {
        const { moviename, category, actors } = req.body

        const movie = await Movie.create({ moviename, category, actors });

        res.send({ movie })
    } catch (error) {
        res.send({ error: error.message })
    }
})
Router.get("/movielist", async (req, res) => {
    try {
        const movie = await Movie.find()
        res.send({ movie })
    } catch (error) {
        res.send({ error: error.message })
    }
})

export default Router;