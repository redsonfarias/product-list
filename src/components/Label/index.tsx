import styles from './styles.module.css'

interface LabelProps {
  text: string
}

export function Label({ text }: LabelProps) {
  return (
    <div className={styles.label}>
      {text}
      <section />
    </div>
  )
}