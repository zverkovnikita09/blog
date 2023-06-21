import { classNames } from 'shared/lib/classNames/classNames'
import style from './Sidebar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { useTranslation } from 'react-i18next'
import { ThrowErrorButton } from 'app/providers/ErrorBoundary'
import Button from 'shared/ui/Button/Button'

interface SidebarProps {
  className?: string
}

export const Sidebar: React.FC<SidebarProps> = () => {
  const [collapsed, setCollapsed] = useState(false)

  const { t } = useTranslation()

  const onToggle = () => {
    setCollapsed(prev => !prev)
  }

  return <div data-testid="sidebar" className={classNames(style.sidebar, {
    [style.collapsed]: collapsed
  }, [])}>
    <Button data-testid="toggle-sidebar" onClick={onToggle}>{t('Переключить')}</Button>
    <ThrowErrorButton />
    <div className={style.switchers}>
      <ThemeSwitcher />
      <LangSwitcher />
    </div>
  </div>
}