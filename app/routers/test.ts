import TEST from "../controllers/test";
import { buildRouter } from "astroboy.ts";

export = buildRouter(TEST, "test", "/v1");
