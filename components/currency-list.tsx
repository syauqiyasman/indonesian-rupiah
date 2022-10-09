/* eslint-disable @next/next/no-img-element */
import styles from './currency-list.module.css'

type CurrencyProps = {
  image: string
  value: string
}

export default function CurrencyList({ image, value }: CurrencyProps) {
  return (
    <div className={styles.currencyBox}>
      <img
        className={styles.currencyImage}
        src={image}
        alt={value}
      />
      <div className={styles.currencyValue}>{value}</div>
    </div>
  )
}
