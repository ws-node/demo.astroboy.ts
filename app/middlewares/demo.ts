import { injectScope } from "astroboy.ts";

export = () => injectScope(async ({ injector, configs, ctx, next }) => {
  // console.log(injector);
  // console.log(configs);
  await next();
  // console.log("fuck");
});