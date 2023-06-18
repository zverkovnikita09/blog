import { useTranslation } from 'react-i18next';

const SecondPage: React.FC = () => {
  const { t } = useTranslation('secondPage')

  return <h1>{t('Вторая страница')}</h1>
}

export default SecondPage;