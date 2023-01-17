import styles from './App.module.css';
import i18next from './translations/i18n';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import buttonLangs from './translations/buttonLanguages';

const currentLanguage = i18next.language.slice(0,2);

const currentLanguageAbbrev = (currentLanguage) => {
  if(["en", "es", "fr", "de", "ar", "zh"].includes(currentLanguage)){
    return currentLanguage;
  } else {
    return "en";
  }
}

const App = () => {
  const { t } = useTranslation();

  const [language, setLanguage] = useState(currentLanguageAbbrev(currentLanguage));

  const changeLanguage = (lng) => {
    i18next.changeLanguage(lng);
    setLanguage(lng);
  }

  return (
    <div>
      <h2 className={styles.person1}>{t('Hello')}</h2>
      <h2 className={styles.person2}>{t('Thanks')}</h2>
      <h2 className={styles.person1}>{t('Where')}</h2>
      <h2 className={styles.person2}>{t('Canada')}</h2>
      <ul className={styles.ul}>
        {buttonLangs.map((lang) =>
          <li key={lang.langId}>
            <button className={`${styles.button} ${language === lang.langId && styles.selected}`} onClick={() => changeLanguage(lang.langId)}>{lang.langName}</button>
          </li>
        )}
      </ul>
    </div>
  );
}

export default App;
