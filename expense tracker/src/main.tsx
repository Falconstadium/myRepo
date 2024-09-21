import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ThemeProvider } from './components/theme-provider.tsx';

import i18next from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import enTranslation from '../src/locale/en/Translation.json';
import frTranslation from '../src/locale/fr/Translation.json';
import arTranslation from '../src/locale/ar/Translation.json';

const resources = {
  en: {
    global: enTranslation,
  },
  fr: {
    global: frTranslation,
  },
  ar: {
    global: arTranslation,
  },
};

i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: 'en',
    lng: 'en',
    resources,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    detection: {
      order: [
        'cookie',
        'localStorage',
        'sessionStorage',
        'htmlTag',
        'querystring',
        'navigator',
        'path',
        'subdomain',
      ],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '../src/locale/{{lng}}/Translation.json',
    },
  });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <App />
      </ThemeProvider>
    </I18nextProvider>
  </StrictMode>
);
