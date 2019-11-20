import { createI18n } from 'react-router-i18n';

const locales = ['en'];

const translations = {
  en: {
    header: {
      title: 'Greek Beta Code Converter',
    },
    converter: {
      title: 'Greek Beta Code Converter',
      betacode: 'Beta Code',
      unicode: 'Greek Unicode',
      smallScreenUnicode: 'Unicode',
      copy: 'Copy to Clipboard',
      placeholderUnicode: 'μῆνιν ἄειδε θεὰ ...',
      placeholderBetacode: 'mh=nin a)/eide qea ...',
    },
  },
};

const I18n = createI18n(
  locales,
  translations,
);

export default I18n;
