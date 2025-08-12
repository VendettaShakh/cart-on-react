import React from 'react'
import style from './index.css'
import Header from './components/Header';
import SectionBody from './components/SectionBody';

const App = () => {
  return (
    <div>
      <section className="section-cart">
        <div className="wrapper">
          <Header />
          <SectionBody />
        </div>
      </section>
    </div>
  )
}

export default App;