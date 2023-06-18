import { classNames } from 'shared/lib/classNames/classNames'
import style from './Sidebar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'

interface SidebarProps {
  className?: string
}

export const Sidebar: React.FC<SidebarProps> = () => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed(prev => !prev)
  }

  return <div className={classNames(style.sidebar, {
    [style.collapsed]: collapsed
  }, [])}>
    <button onClick={onToggle}>toggle</button>
    <div className={style.switchers}>
      <ThemeSwitcher />
      <LangSwitcher />
    </div>
  </div>
}