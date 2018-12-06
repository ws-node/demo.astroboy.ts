import { Router, API, BaseClass, Inject } from "astroboy.ts";
import OldService from "../services/old";

interface GetQuery {
  id: string;
  name: string;
}

@Router("old")
class OldController extends BaseClass {

  @Inject() private readonly oldSrv!: OldService;

  constructor(ctx) {
    super(ctx);
  }

  @API("GET", "get")
  public Get() {
    const { id, name } = this.ctx.query as GetQuery;
    this.ctx.type = "application/json";
    this.ctx.body = JSON.stringify({
      id,
      name,
      url: this.oldSrv.getUrl()
    });
  }

  private notMethod() {
    return "hahaha";
  }

}

export = OldController;
