import React from 'react'
import styles from './BodyFooter.module.css'

const BodyFooter = ({ total }) => {

  const priceFormatter = new Intl.NumberFormat()

  return (
    <div>
      <div className={styles.footer}>
        <div className={styles.total__count}>{total.count} шт.</div>
        <div className={styles.total__price}>{priceFormatter.format(total.price)} ₽</div>
      </div>
    </div>
  )
}

export default BodyFooter