import express, { Request, Response } from "express";
var router = express.Router();

/* GET Test Route */
router.get('/', function (request: Request, response: Response, next: () => void) {
    response.status(200).send("Hello World");
});

export default router;