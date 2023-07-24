import { useState, useEffect } from 'react'
import { IFilter, IProduct } from '@/util/types'
import _ from 'lodash'

interface UseFilterProps {
  products: IProduct[]
  search: string
}

interface IFilterMap {
  [key: string]: IFilter
}

export function useFilter({ products, search }: UseFilterProps) {
  const [filterMap, setFilterMap] = useState<IFilterMap>({})

  const filters = Object.values(filterMap)

  const activeFilters = filters
    .filter((filter) => filter.isActive)
    .map((filter) => filter._id)

  const hasFilter = !!activeFilters.length

  useEffect(() => {
    function loadFilterNames() {
      const map: IFilterMap = {}

      products.forEach((product) => {
        map[product.category._id] = {
          ...product.category,
          count: 0,
          isActive: false,
        }
      })

      setFilterMap(map)
    }

    loadFilterNames()
  }, [])

  useEffect(() => {
    function updateFilters() {
      const map = _.cloneDeep(filterMap)
      
      for (const key in map) {
        map[key].count = 0
      }

      products.forEach((product) => {
        if (
          product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        ) {
          const key = product.category._id
          const category = map[key]
          category.count = category.count + 1

          map[key] = category
        }
      })

      setFilterMap(map)
    }

    if (filters.length) {
      updateFilters()
    }
  }, [search, filters.length])

  function handleFilter(id: string) {
    const map: IFilterMap = _.cloneDeep(filterMap)
    const category = map[id]

    category.isActive = !category.isActive
    map[id] = category

    setFilterMap(map)
  }

  return { filters, activeFilters, hasFilter, handleFilter }
}
