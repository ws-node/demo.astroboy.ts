import { injectScope, ENV, Context } from "astroboy.ts";

export = () => injectScope(async ({ injector, configs, ctx, next }) => {
  // console.log(injector.get(Context).ctx);
  // console.log(configs.get(ENV).showTrace);
  await next();
  // console.log("fuck");
});