import { classNames } from 'shared/lib/classNames/classNames';
import style from './Button.module.scss'
import { type ButtonHTMLAttributes } from 'react';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children: React.ReactNode
  theme?: ThemeButton
}

const Button: React.FC<ButtonProps> = (props) => {
  const { className, children, theme, ...otherProps } = props;

  return <button
    className={classNames(style.button, {}, [className, style[theme]])}
    {...otherProps}>
    {children}
  </button>
}

export default Button;