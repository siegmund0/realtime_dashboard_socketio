import express from "express";
import http from "http";
import cors from "cors";
import handlebars from "express-handlebars";
import bodyParser from "body-parser";

import * as socketConfig from "./src/config/socket/index";
import * as db from "./src/config/db/index";
import dashboard from "./src/modulos/dashboard/routes/index";
import categorias from "./src/modulos/produto/routes/categoriaRoutes";

const app = express();
const server = http.Server(app);

socketConfig.connect(server);
db.connect();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());
app.engine("handlebars", handlebars({ defaultLayout: false }));
app.set("view engine", "handlebars");
app.use(express.static("public"));
app.use(dashboard);
app.use(categorias);

server.listen(8080);
