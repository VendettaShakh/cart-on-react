import React from 'react'
import styles from './BodyFooter.module.css'

const BodyFooter = () => {
  return (
    <div>
            <div className={styles.footer}>
                <div className={styles.total__count}>3 шт.</div>
                <div className={styles.total__price}>329 000 ₽</div>
            </div>
    </div>
  )
}

export default BodyFooter