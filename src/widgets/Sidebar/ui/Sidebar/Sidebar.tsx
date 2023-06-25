import { classNames } from 'shared/lib/classNames/classNames'
import style from './Sidebar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
// import { ThrowErrorButton } from 'app/providers/ErrorBoundary'
import Button, { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AiFillHome } from "react-icons/ai";
import { GrDocumentText } from "react-icons/gr";

interface SidebarProps {
  className?: string
}

export const Sidebar: React.FC<SidebarProps> = () => {
  const [collapsed, setCollapsed] = useState(false);

  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed(prev => !prev)
  }

  return <div data-testid="sidebar" className={classNames(style.sidebar, {
    [style.collapsed]: collapsed
  }, [])}>
    <Button data-testid="toggle-sidebar"
      className={style.collapsButton}
      onClick={onToggle}
      theme={ButtonTheme.BACKGROUND_INVERTED}
      square
      size={ButtonSize.M}>
      {collapsed ? '>' : '<'}
    </Button>
    <div className={style.links}>
      <AppLink theme={AppLinkTheme.INVERTED}
        className={style.link}
        to={RoutePath.main}>
        <AiFillHome />
        {!collapsed && t('Главная')}
      </AppLink>
      <AppLink theme={AppLinkTheme.INVERTED}
        className={style.link}
        to={RoutePath.second}>
        <GrDocumentText />
        {!collapsed && t('Вторая страница')}
      </AppLink>
    </div>
    {/* <ThrowErrorButton /> */}
    <div className={style.switchers}>
      <ThemeSwitcher />
      <LangSwitcher short={collapsed} />
    </div>
  </div>
}