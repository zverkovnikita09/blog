import path from 'path';
import { BuildPaths } from '../build/types/config';
import webpack from 'webpack'
import { buildCssLoader } from '../build/loaders/buildCssLoader';


export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    entry: '',
    html: ''
  }
  config.resolve.modules.push(paths.src);
  config.resolve.extensions.push('ts', 'tsx');
  config.module.rules.push(buildCssLoader('development'))

  return config;
}