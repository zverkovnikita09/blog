import { classNames } from 'shared/lib/classNames/classNames'
import style from './ThemeSwitcher.module.scss'
import { useTheme } from 'app/providers/ThemeProvider';
import sunIcon from 'shared/assets/icons/sun.png'
import moonIcon from 'shared/assets/icons/moon.png'
import Button from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return <Button
    className={classNames(style.themeSwitcher, {}, [className, style[theme]])}
    onClick={toggleTheme}>
    <img src={sunIcon} className={style.sun} height={20} width={20} />
    <img src={moonIcon} className={style.moon} height={20} width={20} />
  </Button>
}