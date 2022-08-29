import  {appServer,creatDataBase} from "./server"
import { config } from "./config"
import chalk from "chalk";

creatDataBase();

appServer.listen(config.SERVER_PORT, () => {
    console.log(chalk.yellow(`server started at http://group:${config.SERVER_PORT}`));
});