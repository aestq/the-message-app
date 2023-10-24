import { useTranslation } from 'react-i18next'

export const EntryPage = () => {
  const { t, i18n } = useTranslation()

  const changeLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <div>
      {t('Стартовая страница')}
      <button onClick={changeLang}>Change lang</button>
    </div>
  )
}
