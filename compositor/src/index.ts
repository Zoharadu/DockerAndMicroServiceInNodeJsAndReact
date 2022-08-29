import  {appCompositor } from "./server"
import { config } from "./config";
import chalk from "chalk";

appCompositor.listen(config.SERVER_PORT, () => {
    console.log(chalk.yellow(`server started at http://compositor:${config.SERVER_PORT}`));
});