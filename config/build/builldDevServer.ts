import { type BuildOptions } from './types/config';
import type { Configuration as DevServerConfig } from 'webpack-dev-server';

export function buildDevServer (options: BuildOptions): DevServerConfig {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true
  }
}