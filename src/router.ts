import { Router, Request, Response } from "express"
import { createMovie, findMovieById, getAllMovies, removeMovie, updateMovie } from "./controllers/movieControllers";

// validations
import { validate } from "./middleware/handleValidation";
import { movieCreateValidation } from "./middleware/movieValidation";
import { removeListener } from "process";

const router = Router()

export default router
    .get("/test", (req:Request, res:Response) => {
    res.status(200).send("API Working!")
    })
    .post("/movie", movieCreateValidation(), validate, createMovie)
    .get("/movie/:id", findMovieById)
    .get("/movies", getAllMovies)
    .delete("/movie/:id", removeMovie)
    .patch("/update/movie/:id", movieCreateValidation(), validate, updateMovie);
