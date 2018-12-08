import { Injectable, Context, IContext, createInjectMixin } from "astroboy.ts";
import DataService from "./Data";
import TestService from "./test";
import Test02Service from "./test02";

// @ts-ignore 多重继承忽略内部部量定义
abstract class MixinService implements Context<{}>, DataService, TestService, Test02Service {
  public thisValue: number;
  public ctx: IContext;
  public stamp: number;
  /** 重载：TestService.add */
  public abstract add(v: string): void;
  /** 重载：Test02Service.add */
  public abstract add(v: number): void;
  /** 重载：TestService.showValue */
  public abstract showValue(type: 1): number;
  /** 重载：TestService02.showValue */
  public abstract showValue(type: 2): number;
  /** 重载：TestService02.showValue */
  public abstract showValue(): number;
  // 其余的都可以简单地进行proxy转发
  public abstract reset(v: number): void;
  public abstract demoMethod2(): number;
  public abstract setStamp(v: number): void;
}

@Injectable({ token: MixinService })
class MixinServiceImplement {

  constructor(private context: Context<{}>, private test: TestService, private test02: Test02Service, private data: DataService) {
    return createInjectMixin(this, [
      "context",
      "test",
      "test02",
      "data"
    ]);
  }

  public add(v: number | string): void {
    if (typeof v === "number") return this.test02.add(v);
    return this.test.add(v);
  }

  public showValue(type?: 1 | 2) {
    if (type === 1) return this.test.showValue();
    return this.test02.showValue();
  }

}

export = MixinService;