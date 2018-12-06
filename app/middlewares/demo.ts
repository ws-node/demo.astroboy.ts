import { injectScope, ENV, Context } from "astroboy.ts";
import DataService from "../services/Data";

export = () => injectScope(async ({ injector, configs, ctx, next }) => {
  // console.log(configs.get(ENV).showTrace);
  const data = injector.get(DataService);
  data.setStamp(new Date().getTime());
  await next();
  // console.log("fuck");
});