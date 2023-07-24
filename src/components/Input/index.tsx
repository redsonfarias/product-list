import { ChangeEvent } from 'react'
import { MagnifyingGlass } from '@phosphor-icons/react'
import styles from './styles.module.css'

interface InputProps {
  value: string
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

export function Input({ value, handleSearch }: InputProps) {
  return (
    <div className={styles.input}>
      <input
        placeholder="busque aqui"
        value={value}
        onChange={handleSearch}
      />
      <MagnifyingGlass weight='bold' />
    </div>
  )
}
