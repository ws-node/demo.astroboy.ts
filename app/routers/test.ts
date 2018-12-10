import CTOR from "../controllers/test";
import { buildRouter } from "astroboy.ts";

export = buildRouter(CTOR, "test", "/v1");
