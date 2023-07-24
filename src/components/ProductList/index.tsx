import { Label } from '../Label'
import { IProduct } from '@/util/types'
import styles from './styles.module.css'

interface ProductListProps {
  products: IProduct[]
}

export function ProductList({ products }: ProductListProps) {
  return (
    <div className={styles.productList}>
      <Label text={`${products.length} resultados`} />
      <div className={styles.list}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <img
              src={product.images[0].asset.url}
              alt={product.images[0].alt}
            />
            <p>{product.name}</p>
          </div>
        ))}
      </div>
      {!products.length && (
        <p className={styles.msg}>Nenhum produto foi encontrado</p>
      )}
    </div>
  )
}
