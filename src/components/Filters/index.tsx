import { Checkbox } from '@/components/Checkbox'
import { Label } from '@/components/Label'
import { IFilter } from '@/util/types'
import styles from './styles.module.css'

interface FiltersProps {
  filters: IFilter[]
  handleFilter: (id: string) => void
}

export function Filters({ filters, handleFilter }: FiltersProps) {
  return (
    <div>
      <Label text="Filtros" />
      <div className={styles.filters}>
        {filters.map((filter) => (
          <div key={filter._id}>
            <Checkbox
              checked={filter.isActive}
              handleCheck={() => handleFilter(filter._id)}
            />
            <p>
              {filter.name} ({filter.count})
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
