import { Controller, GET, JsonResult } from "astroboy.ts";

@Controller("bbb")
class TestController {

  @GET("xxcdc")
  public xxx() {
    return new JsonResult({
      abc: 123
    });
  }

}
export = TestController;
