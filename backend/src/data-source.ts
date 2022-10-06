import "reflect-metadata"
import { DataSource } from "typeorm"
import { UserCS} from "./entity/UserCS"
import { CS } from "./entity/CS"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "silva",
    database: "faculdade",
    synchronize: true,
    logging: false,
    entities: [UserCS,CS],
    migrations: [],
    subscribers: [],
})
