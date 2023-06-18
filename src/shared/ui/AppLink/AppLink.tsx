import { Link, type LinkProps } from 'react-router-dom';
import style from './AppLink.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
  className?: string
  children: React.ReactNode
  theme?: AppLinkTheme
}

const AppLink: React.FC<AppLinkProps> = (props) => {
  const {
    children,
    to,
    className,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;

  return <Link
    to={to}
    className={classNames(style.appLink, {}, [className, style[theme]])}
    {...otherProps}>
    {children}
  </Link>
}

export default AppLink;