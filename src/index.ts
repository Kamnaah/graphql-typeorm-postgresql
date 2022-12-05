import express from "express";
import {schema} from "./schema";
import { graphqlHTTP } from 'express-graphql';
import cors from "cors";
import { createConnection} from "typeorm";
import { Users } from "./entities/Users";


const main= async () =>{
  const connect= await createConnection({
    type: "postgres",
    database: "graphqlCRUD",
    username: "postgres",
    password: "Kamn@1012",
    logging: false,
    synchronize: true,
    entities: [Users]
  })

  const app= express();
  app.use(express.json());
  app.use(cors());
  app.use("/graphql", graphqlHTTP(
    {
      schema,
      graphiql: true,
    }
  ))
  app.listen(3001, ()=>{
    console.log("server is running at 3001");
  })
}

main().catch((err)=>{
  console.log(err);
});

