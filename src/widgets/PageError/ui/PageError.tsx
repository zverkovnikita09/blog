import { classNames } from 'shared/lib/classNames/classNames'
import style from './PageError.module.scss'
import { useTranslation } from 'react-i18next'
import Button from 'shared/ui/Button/Button'

interface PageErrorProps {
  className?: string
}

export const PageError: React.FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload()
  }

  return <div className={classNames(style.pageError, {}, [className])}>
    <p>{t('Сообщение об ошибке страницы')}</p>
    <Button onClick={reloadPage}>
      {t('Обновить страницу')}
    </Button>
  </div>
}