interface IImage {
  alt: string
  asset: {
    url: string
  }
}

export interface IProduct {
  name: string
  shortDescription: string
  id: string
  images: IImage[]
  category: {
    _id: string
    name: string
  }
}

export interface IFilter {
  name: string
  _id: string
  count: number
  isActive: boolean
}