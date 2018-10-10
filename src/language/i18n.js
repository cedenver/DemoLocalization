import RNLanguages from 'react-native-languages';
import i18n from 'i18n-js';

import en from './en.json';
import fr from './fr.json';
import tr from './tr.json';

i18n.locale = RNLanguages.language;
i18n.fallbacks = true;
i18n.translations = { en, fr, tr };

export default i18n;