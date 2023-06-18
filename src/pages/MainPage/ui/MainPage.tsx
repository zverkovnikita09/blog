import { useTranslation } from 'react-i18next';

const Main: React.FC = () => {
  const { t } = useTranslation()

  return <h1>{t('Главная')}</h1>
}

export default Main;