import {Configuration} from "mini-css-extract-plugin";
import {BuildOptions} from "./types/types";

export function buildResolvers(options: BuildOptions): Configuration['resolve'] {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': options.paths.src,
        }
    }
}