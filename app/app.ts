import path from "path";
import { Server, Astroboy, JSON_RESULT_OPTIONS, JsonResolvers, SIMPLE_LOGGER_OPTIONS } from "astroboy.ts";
import { DEMO_OPTIONS } from "../config/options/demo";
import { STR_OPT } from "../config/options/strOpt";
import FactoryService from "./services/fac";

// new Astroboy({
//   ROOT_PATH: path.resolve(__dirname, "..")
// }).on("start", () => {
//   console.log("hello world!");
// }).on("error", (err) => {
//   console.log(`fuck it : ${String(err)}`);
// });

Server.Create(Astroboy, {
  ROOT_PATH: path.resolve(__dirname, "..")
})
  .scoped(FactoryService, FactoryService.factory)
  .option(STR_OPT)
  .option(DEMO_OPTIONS)
  .option(JSON_RESULT_OPTIONS, { format: true, keyResolver: JsonResolvers.camelcase })
  .option(SIMPLE_LOGGER_OPTIONS, { level: 0 })
  .run({
    onStart: () => console.log("hello world!"),
    onError: (err) => console.log(`fuck it : ${String(err)}`)
  });
