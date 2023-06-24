import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { type BuildMode } from '../types/config'

export function buildCssLoader(mode: BuildMode) {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: '[name]__[local]__[hash:base64:8]'
          }
        }
      },
      'sass-loader'
    ]
  }
}