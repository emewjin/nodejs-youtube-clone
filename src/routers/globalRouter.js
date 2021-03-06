import express from "express";
import {trending, search} from "../controllers/videosController";
import {join, login} from "../controllers/usersController";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter; // = I want to share variable globalRouter!!