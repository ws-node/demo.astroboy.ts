import { BaseClass } from "astroboy.ts";

class OldService extends BaseClass {

  getUrl() {
    return this.ctx.url;
  }

}

export = OldService;
