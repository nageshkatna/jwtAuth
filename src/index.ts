import  express from "express";
import config from "./config/server-config";
import cors from "cors"
import session from "express-session";

const app = express();

// app.use(cors);
// app.use(express.json());
const port:Number = config.port;

app.get('/', (req, res)=> {res.send("<h1>Hello World</h1>")});

app.listen(port, ()=> console.log(`Server running on port: ${port}`));