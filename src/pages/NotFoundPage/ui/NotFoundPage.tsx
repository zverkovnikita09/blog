import { useTranslation } from 'react-i18next';
import style from './NotFoundPage.module.scss'

const NotFoundPage: React.FC = () => {
  const { t } = useTranslation()

  return <div className={style.notFoundPage}>
    {t('Страница не найдена')}
  </div>
}

export default NotFoundPage;