import { useTranslation } from 'react-i18next'
import { useTheme } from '@/shared/lib'

export const EntryPage = () => {
  const { t, i18n } = useTranslation()
  const { toggleTheme } = useTheme()

  const changeLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  const changeTheme = () => {
    toggleTheme()
  }

  return (
    <div>
      {t('Стартовая страница')}
      <button onClick={changeTheme}>change theme</button>
      <button onClick={changeLang}>Change lang</button>
    </div>
  )
}
