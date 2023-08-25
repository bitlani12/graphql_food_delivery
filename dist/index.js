"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// const express = require('express');
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_graphql_1 = require("express-graphql");
const schema_1 = __importDefault(require("./schema/schema"));
// import colors from 'colors'
const db_1 = require("./config/db");
const port = process.env.PORT || 8000;
const app = (0, express_1.default)();
(0, db_1.connectDB)();
app.use('/graphql', (0, express_graphql_1.graphqlHTTP)({
    schema: schema_1.default,
    graphiql: process.env.NODE_ENV === 'development'
}));
app.get('/', (req, res) => {
    res.send('Welcome to Express & TypeScript Server');
});
app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map