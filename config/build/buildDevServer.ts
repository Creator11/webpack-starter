import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/types";
import detectPort from "detect-port";

export async function buildDevServer(
  options: BuildOptions
): Promise<DevServerConfiguration> {
  const defaultPort = options.port || 3000;
  const port = await detectPort(defaultPort);

  return {
    port: port,
    open: true,
    historyApiFallback: true,
    hot: true,
  };
}
