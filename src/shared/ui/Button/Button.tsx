import { classNames } from 'shared/lib/classNames/classNames';
import style from './Button.module.scss'
import { type ButtonHTMLAttributes } from 'react';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'background_inverted'
}

export enum ButtonSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children: React.ReactNode
  theme?: ButtonTheme
  square?: boolean
  size?: ButtonSize
}

const Button: React.FC<ButtonProps> = (props) => {
  const { className, children, theme, square, size, ...otherProps } = props;

  return <button
    className={classNames(style.button,
      { [style.square]: square },
      [className, style[theme], style[size]])}
    {...otherProps}>
    {children}
  </button>
}

export default Button;