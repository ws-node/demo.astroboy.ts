import TestService from "../services/test";
import Test02Service from "../services/test02";
import BusinessContext from "../services/business-context";
import DataService from "../services/Data";
import MixinService from "../services/mixin";
import {
  Controller, Configs, AstroboyContext,
  ENV, JsonResult, GET, POST, FromParams,
  FromBody, Deserialize, IContext
} from "astroboy.ts";
import { STR_OPT } from "../../config/options/strOpt";
import { DEMO_OPTIONS } from "../../config/options/demo";

function Params(key: string) {
  return FromParams({
    transform: (data) => data[key]
  });
}

interface GetQuery {
  id: string;
  name: string;
  fuck: string;
}

interface PostData {
  id: number;
  name: string;
}

class ClassQuery {

  @Deserialize()
  readonly id: number;

  @Deserialize()
  readonly type: string;

  @Deserialize()
  readonly isTrue: boolean;
}

@Controller("test")
class TestController {

  constructor(
    private configs: Configs,
    private mixin: MixinService,
    private base: AstroboyContext<IContext & { fakeId: string; }>,
    private business: BusinessContext,
    private data: DataService,
    private test: TestService,
    private test02: Test02Service) {

  }

  @GET("get")
  public Get(@FromParams() params: GetQuery) {
    const { ctx } = this.base;
    const { id, name } = params;
    ctx.type = "application/json";
    return new JsonResult({
      id,
      name,
      url: ctx.url,
    });
  }

  // @GET("get")
  // public Get(@FromParams() params: GetQuery) {
  //   const { ctx } = this.base;
  //   const { id, name } = params;
  //   ctx.type = "application/json";
  //   ctx.body = JSON.stringify({
  //     id,
  //     name,
  //     url: ctx.url,
  //   });
  // }

  // @POST("post/:type")
  // public async Post(@FromParams() params: ClassQuery, @FromBody() { id, name }: PostData) {
  //   const { type, id: id2, isTrue } = params;
  //   return new JsonResult({
  //     id,
  //     name,
  //     type,
  //     id2,
  //     isTrue,
  //     data: this.data.stamp,
  //     config: {
  //       str_opt: this.configs.get(STR_OPT),
  //       demo_options: this.configs.get(DEMO_OPTIONS)
  //     }
  //   });
  // }

  @POST("post/:type")
  public async Post(
    @Params("type") type: string,
    @Params("id") id2: number,
    @Params("isTrue") isTrue: boolean,
    @FromBody() body: PostData) {
    const { id, name } = body;
    this.mixin.add("222");
    this.mixin.add(222);
    return new JsonResult({
      id,
      name,
      type,
      id2,
      isTrue,
      data: this.data.stamp,
      config: {
        str_opt: this.configs.get(STR_OPT),
        demo_options: this.configs.get(DEMO_OPTIONS)
      },
      mixin: {
        stamp: this.mixin.stamp,
        strOpt: this.mixin.ctx.getConfig("strOpt"),
        testValue: this.mixin.showValue(1),
        test02Value: this.mixin.showValue(2)
      }
    });
  }

  @GET("get2/:fuck")
  public async GetMore(@FromParams() params: GetQuery) {
    const { id, name, fuck } = params;
    this.test02.add(345);
    this.test.reset(4534);
    // const env = this.configs.get(ENV);
    // console.log(env);
    // console.log(this.base);
    // throw new Error("fuck");
    // await this.delay(250);
    // console.log(this.base.config);
    return new JsonResult({
      status: this.test.demoMethod2(),
      // config: this.base.getConfig(),
      // haha: this.notMethod(),
      // env,
      query_id: id,
      query_name: name,
      query_fuck: fuck,
      ctx: this.business.ctx === this.base.ctx,
      t05: this.test.t05 === this.test.t02.t05,
      t08: this.test.t08 === this.test.t06.t08
    });
  }

  private notMethod() {
    return "hahaha";
  }

  private delay(time = 100) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

}

export = TestController;
