import { useTranslation } from 'react-i18next'
import style from './Navbar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink'

interface NavbarProps {
  className?: string
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const {t} = useTranslation();

  return <div className={classNames(style.navbar)}>
    <div className={style.links}>
      <AppLink theme={AppLinkTheme.SECONDARY} to='/'>{t('Главная')}</AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to='/second'>{t('Вторая страница')}</AppLink>
    </div>
  </div>
}