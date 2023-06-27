import { useTranslation } from 'react-i18next'
import Button, { ButtonTheme } from 'shared/ui/Button/Button'
import style from './Navbar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import Modal from 'shared/ui/Modal/Modal'
import { useState, useCallback } from 'react'

interface NavbarProps {
  className?: string
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  const [isAuthModalOpen, setAuthModalOpen] = useState(false)

  const onToggleAuthModal = useCallback(() => {
    setAuthModalOpen(pr => !pr)
  }, [])

  return <div className={classNames(style.navbar)}>
    <Button
      className={style.openLoginPopup}
      theme={ButtonTheme.CLEAR_INVERTED}
      onClick={onToggleAuthModal}>
      {t('Вход')}
    </Button>
    <Modal isOpen={isAuthModalOpen} onClose={onToggleAuthModal}>
      {/* eslint-disable */}
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sunt voluptas soluta earum iusto. Deserunt unde vel libero dicta temporibus at ab corrupti fuga quod voluptates possimus quasi, molestiae dolorem.
    </Modal>
  </div>
}