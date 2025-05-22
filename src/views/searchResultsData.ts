import img40mg from '@/assets/images/lipitor-40mg.jpg'
import img10mg from '@/assets/images/lipitor-10mg.jpg'
import img20mg from '@/assets/images/lipitor-20mg.jpg'
import img80mg from '@/assets/images/lipitor-80mg.jpg'
import sandoz20mg1 from '@/assets/images/sandoz-20mg-1.jpg'
import genfar20mg1 from '@/assets/images/genfar-20mg-1.jpg'
import sandoz40mg1 from '@/assets/images/sandoz-40mg-1.jpg'

export interface SearchResult {
  id: string
  matchKey: string // e.g. "atorvastatina-20mg-30"
  type: 'generic' | 'commercial'
  brand: string
  name: string
  desc: string
  price: number
  discount: number
  units?: string
  delivery?: string
  rating?: number
  ratingCount?: number
  image: string
}

export const allResults: SearchResult[] = [
  {
    id: '1',
    matchKey: 'atorvastatina-20mg-30',
    type: 'generic',
    brand: 'Sandoz',
    name: 'Atorvastatina 20 Mg Sandoz Caja X 30 Comprimidos',
    desc: '',
    price: 24750,
    discount: 29,
    units: 'Unidades a $816.67',
    delivery: '35 min.',
    rating: 4.8,
    ratingCount: 20,
    image: sandoz20mg1
  },
  {
    id: '2',
    matchKey: 'atorvastatina-20mg-30',
    type: 'generic',
    brand: 'Genfar',
    name: 'Atorvastatina 20 Mg Genfar Caja X 30 Tabletas',
    desc: '',
    price: 45175,
    discount: 50,
    units: 'Unidades a $1505.83',
    delivery: '35 min.',
    rating: 5.0,
    ratingCount: 1,
    image: genfar20mg1
  },
  {
    id: '3',
    matchKey: 'atorvastatina-40mg-30',
    type: 'generic',
    brand: 'Sandoz',
    name: 'Atorvastatina 40 Mg Sandoz Caja X 30 Comprimidos',
    desc: '',
    price: 46102,
    discount: 11,
    units: 'Unidades a $1536.73',
    delivery: '35 min.',
    rating: 4.6,
    ratingCount: 13,
    image: sandoz40mg1
  },
  {
    id: '10',
    matchKey: 'lipitor-40mg-30',
    type: 'commercial',
    brand: 'Lipitor',
    name: 'Lipitor Atorvastatina Cálcica 40 Mg Pfizer Caja X 30 Tabletas',
    desc: '',
    price: 197078,
    discount: 5,
    units: 'Unidades a $6915.00',
    delivery: '35 min.',
    rating: 5.0,
    ratingCount: 2,
    image: img40mg
  },
  {
    id: '11',
    matchKey: 'lipitor-20mg-30',
    type: 'commercial',
    brand: 'Lipitor',
    name: 'Lipitor Atorvastatina 20 Mg Pfizer Caja X 30 Tabletas',
    desc: '',
    price: 108870,
    discount: 5,
    units: 'Unidades a $3820.00',
    delivery: '35 min.',
    rating: 2.0,
    ratingCount: 1,
    image: img20mg
  },
  {
    id: '12',
    matchKey: 'lipitor-10mg-30',
    type: 'commercial',
    brand: 'Lipitor',
    name: 'Lipitor Atorvastatina 10 Mg Pfizer Caja X 30 Tabletas',
    desc: '',
    price: 103028,
    discount: 5,
    units: 'Unidades a $3615.00',
    delivery: '35 min.',
    rating: 0.0,
    ratingCount: 0,
    image: img10mg
  },
  {
    id: '13',
    matchKey: 'lipitor-80mg-30',
    type: 'commercial',
    brand: 'Lipitor',
    name: 'Lipitor 80mg Tabletas Caja X30tab. Pfizer Atorvastatin',
    desc: '',
    price: 303950,
    units: 'Unidades a $10317.67',
    delivery: '35 min.',
    rating: 0.0,
    ratingCount: 0,
    image: img80mg,
    discount: 0
  }
] 