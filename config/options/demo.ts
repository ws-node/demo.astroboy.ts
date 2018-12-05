
import { createConfig } from "astroboy.ts";

interface DemoOptions {
  key01: number;
  key02: string;
}

export const DEMO_OPTIONS = createConfig<DemoOptions>("demo");
