import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

function App() {
  const { t } = useTranslation();

  function handleClick(lang) {
    i18next.changeLanguage(lang)
  }

  return (
    <div className="App">
      <nav style={{ width: '100%', padding: '2rem 0', backgroundColor: 'gray' }}>
        <button onClick={() => handleClick('en')} >
          English
          </button>
        <button onClick={() => handleClick('spn')} >
          Spanish
          </button>
        <button onClick={() => handleClick('chi')} >
          Chinese
          </button>
        <button onClick={() => handleClick('vn')} >
          Vietnamese
          </button>
      </nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h2>{t('Hi.1')}</h2> <h4>{t('Where.1')}</h4> <h6>{t('From.1')}</h6>
        </p>
      </header>
    </div>
  );
}

export default App;
