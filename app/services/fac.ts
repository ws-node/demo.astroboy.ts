import { AstroboyContext, InjectService } from "astroboy.ts";

abstract class FactoryService {
  public data: number;
  public context: AstroboyContext;

  public static factory = [
    [AstroboyContext],
    (context: AstroboyContext) => ({
      data: 123,
      context
    })
  ];
}

export = FactoryService;