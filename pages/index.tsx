import CurrencyList from '@/components/currency-list'
import styles from './index.module.css'

export default function IndexPage() {
  return (
    <div className={styles.currencyContainer}>
      <CurrencyList
        image="https://res.cloudinary.com/hexabisa/image/upload/v1665309777/seribu-rupiah_bquizl.png"
        value="Seribu Rupiah"
      />
      <CurrencyList
        image="https://res.cloudinary.com/hexabisa/image/upload/v1665309774/lima-ribu-rupiah_kulyjq.png"
        value="Lima Ribu Rupiah"
      />
      <CurrencyList
        image="https://res.cloudinary.com/hexabisa/image/upload/v1665309778/sepuluh-ribu-rupiah_swmarq.png"
        value="Sepuluh Ribu Rupiah"
      />
      <CurrencyList
        image="https://res.cloudinary.com/hexabisa/image/upload/v1665309777/dua-puluh-ribu-rupiah_mlhkon.png"
        value="Dua Puluh Ribu Rupiah"
      />
      <CurrencyList
        image="https://res.cloudinary.com/hexabisa/image/upload/v1665309774/lima-puluh-ribu-rupiah_wuzh77.png"
        value="Lima Puluh Ribu Rupiah"
      />
      <CurrencyList
        image="https://res.cloudinary.com/hexabisa/image/upload/v1665309775/seratus-ribu-rupiah_il03f0.png"
        value="Seratus Ribu Rupiah"
      />
    </div>
  )
}
