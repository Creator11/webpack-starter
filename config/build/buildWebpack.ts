import webpack from "webpack";
import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/types";

export async function buildWebpackAsync(
  options: BuildOptions
): Promise<webpack.Configuration> {
  const { mode, paths } = options;
  const isDev = mode === "development";
  const devServerConfig = isDev ? await buildDevServer(options) : undefined;

  return {
    mode: mode ?? "production",
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: "[name].[contenthash].js",
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    // devtool: isDev && 'inline-source-map',
    devServer: devServerConfig,
  };
}
