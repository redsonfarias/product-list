import { useState, ChangeEvent } from 'react'
import database from '@/util/products.json'
import { useFilter } from './hooks/useFilter'
import { ProductList } from './components/ProductList'
import { Filters } from './components/Filters'
import { Input } from './components/Input'
import styles from './App.module.css'
import './global.css'

function App() {
  const products = database.data.nodes

  const [search, setSearch] = useState('')

  const { filters, activeFilters, hasFilter, handleFilter } = useFilter({ products, search })

  const filteredProducts = products.filter((product) => {
    const { name, category } = product
    
    if (!name.toLocaleLowerCase().includes(search.toLocaleLowerCase())) return
    if (hasFilter && !activeFilters.includes(category._id)) return

    return product
  })

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value)
  }

  return (
    <div className={styles.content}>
      <p className={styles.title}>
        o que você <span className={styles.green}>está procurando?</span>
      </p>
      <Input value={search} handleSearch={handleSearch} />
      <div className={styles.main}>
        <Filters filters={filters} handleFilter={handleFilter} />
        <ProductList products={filteredProducts} />
      </div>
    </div>
  )
}

export default App
