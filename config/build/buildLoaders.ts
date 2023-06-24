import type webpack from 'webpack'
import { type BuildOptions } from './types/config'
import { buildCssLoader } from './loaders/buildCssLoader'

export function buildLoaders (options: BuildOptions): webpack.RuleSetRule[] {
  const fileLoader = {
    test: /\.(png|jpe?g|gif|webp|woff|woff2)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  }

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  const cssLoaders = buildCssLoader(options.mode);

  return [
    tsLoader,
    cssLoaders,
    fileLoader
  ]
}