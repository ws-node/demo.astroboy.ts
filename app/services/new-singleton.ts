import { Injectable, ReactiveSingleton, AstroboyContext, InjectScope, Watch } from "astroboy.ts";
import DataService from "./Data";
import Test02Service from "./test02";

interface IDepts {
    p1: DataService;
    p2: AstroboyContext;
}

@Injectable(InjectScope.Singleton)
class NewSingleton extends ReactiveSingleton<IDepts> {

    @Watch()
    private p1!: DataService;

    @Watch()
    private p2!: AstroboyContext;

    constructor(private test02: Test02Service) {
        super();
    }

    time = new Date().getTime();

    test() {
        console.log(this.time);
        console.log(NewSingleton);
        console.log(this);
        console.log(this.delegate);
        console.log(this.p1);
        console.log(this.p2);
        console.log(this.test02.showValue);
        console.log(this.p1 === this.delegate.p1);
        console.log(this.p2 === this.delegate.p2);
        console.log(this.delegate.p1.context.ctx.state["$$scopeId"]);
        console.log(this.delegate.p2.ctx.state["$$scopeId"]);
        this.time = new Date().getTime();
    }

}

// NewSingleton.prototype["@watch"] = {
//     p1: { token: DataService },
//     p2: { token: AstroboyContext }
// };

// console.log(NewSingleton.prototype); 

export = NewSingleton;
