import OLD from "../controllers/old";
import { createRouter } from "astroboy.ts";

export = createRouter(OLD, "old", "/v1");
