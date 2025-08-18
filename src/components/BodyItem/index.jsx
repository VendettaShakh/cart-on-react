import React from 'react'
import styles from './BodyItem.module.css'

const BodyItem = ({ id, title, img, priceTotal, count, deleteProduct, increase, decrease }) => {
  return (
    <div>
      <div className={styles.body_item}>
        <img src={img} alt='Apple MacBook Air 13' className={styles.item__img} />
        <div className={styles.item__title}>{title}</div>
        <div className={styles.item_count}>
          <div className={styles.count__box}>{count}</div>
          <div className={styles.count__controls}>
            <img onClick={() => increase(id)} className={styles.count__plus} src="images/up.svg" alt="plus" />
            <img onClick={() => decrease(id, count)} className={styles.count__minus} src="images/down.svg" alt="down" />
          </div>
        </div>
        <div className={styles.item__price}>{priceTotal} ₽</div>
        <img onClick={() => deleteProduct(id)} src='images/x.svg' alt='x' className={styles.item__remove} />
      </div>
    </div>
  )
}

export default BodyItem;