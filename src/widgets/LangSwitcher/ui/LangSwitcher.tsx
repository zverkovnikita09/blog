import { classNames } from 'shared/lib/classNames/classNames'
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
  className?: string,
  short?: boolean
}

export const LangSwitcher: React.FC<LangSwitcherProps> = ({ className, short }) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return <Button theme={ButtonTheme.CLEAR}
    className={classNames('', {}, [])}
    onClick={toggle}>
    {t(short ? 'Язык (короткий)' : 'Язык')}
  </Button>
}