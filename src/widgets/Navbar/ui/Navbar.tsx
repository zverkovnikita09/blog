import { useTranslation } from 'react-i18next'
import style from './Navbar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

interface NavbarProps {
  className?: string
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  return <div className={classNames(style.navbar)}>
    
  </div>
}