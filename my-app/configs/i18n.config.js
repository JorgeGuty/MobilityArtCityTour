import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { en, es } from '../lang'

// empty for now
const resources = {
  en: {
    translation: en
  },
  es: {
    translation: es
  }
}

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false // needed because is a react native project
  }
})

export default i18n
