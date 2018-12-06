import { Injectable, AstroboyContext } from "astroboy.ts";

@Injectable()
class DataService {

  private value = 0;

  public get stamp() { return this.value; }

  constructor(public context: AstroboyContext) { }

  public setStamp(v: number) {
    this.value = v;
  }

}

export = DataService;