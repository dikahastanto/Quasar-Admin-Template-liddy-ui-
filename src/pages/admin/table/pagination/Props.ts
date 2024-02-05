import { QTableProps } from 'quasar'

export const DefaultColumns: QTableProps['columns'] = [
  { name: 'profilePicture', label: 'Profile', field: 'profilePicture', align: 'left' },
  { name: 'gender', label: 'Gender', field: 'gender', align: 'left' },
  { name: 'email', label: 'Email', field: 'email', align: 'left' },
  { name: 'phone', label: 'Phone', field: 'phone', align: 'left' },
  { name: 'street', label: 'Street', field: 'street', align: 'left' },
  { name: 'country', label: 'Country', field: 'country', align: 'left' },
  { name: 'actions', label: 'Actions', field: 'actions', align: 'left' }
]

export interface TResponseUser {
  id: number,
  gender: string,
  date_of_birth: string,
  job: string,
  city: string,
  zipcode: string,
  latitude: number,
  profile_picture: string,
  first_name: string,
  last_name: string,
  email: string,
  phone: string,
  street: string,
  state: string,
  country: string,
  longitude: number
}
