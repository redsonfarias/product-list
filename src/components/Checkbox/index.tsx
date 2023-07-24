import { ChangeEvent } from 'react'
import styles from './styles.module.css'

interface CheckboxProps {
  checked: boolean
  handleCheck: (event: ChangeEvent<HTMLInputElement>) => void
}

export function Checkbox({ checked, handleCheck }: CheckboxProps) {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={handleCheck}
      className={styles.checkbox}
    />
  )
}
