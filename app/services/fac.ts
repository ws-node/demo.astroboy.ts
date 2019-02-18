import { AstroboyContext, FactoryContext } from "astroboy.ts";

abstract class FactoryService {
  public data: number;
  public context: AstroboyContext;
  public static factory({ injector }: FactoryContext): FactoryService {
    return {
      data: 123,
      context: injector.get(AstroboyContext)
    };
  }
}

export = FactoryService;