import Spinner from 'shared/ui/Spinner/Spinner'
import style from './PageLoader.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

interface PageLoaderProps {
  className?: string
}

export const PageLoader: React.FC<PageLoaderProps> = ({ className }) => {
  return <div className={classNames(style.pageLoader, {}, [className])}>
    <Spinner />
  </div>
}