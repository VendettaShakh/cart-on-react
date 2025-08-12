import React from 'react'
import styles from './App.module.css'
import Header from '../components/Header';
import SectionBody from '../components/SectionBody'

const App = () => {
    return (
        <div>
            <section className={styles.cart}>
                <div className={styles.wrapper}>
                    <Header />
                    <SectionBody />
                </div>
            </section>
        </div>
    )
}

export default App;