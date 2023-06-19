import { classNames } from 'shared/lib/classNames/classNames';
import style from './Spinner.module.scss'

interface SpinnerProps {
  className?: string
}

const Spinner: React.FC<SpinnerProps> = ({ className }) => {
  return <span className={classNames(style.loader, {}, [className])} />
}

export default Spinner;