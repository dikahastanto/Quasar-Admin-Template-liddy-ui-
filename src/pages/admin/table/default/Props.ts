import { QTableProps } from 'quasar'

export const DefaultColumns: QTableProps['columns'] = [
  { name: 'name', label: 'Name', field: 'name', align: 'left' },
  { name: 'calories', label: 'Calories', field: 'calories', align: 'left' },
  { name: 'fat', label: 'Fat', field: 'fat', align: 'left' },
  { name: 'carbs', label: 'Carbs', field: 'carbs', align: 'left' },
  { name: 'protein', label: 'Protein', field: 'protein', align: 'left' },
  { name: 'sodium', label: 'Sodium', field: 'sodium', align: 'left' },
  { name: 'iron', label: 'Iron', field: 'iron', align: 'left' },
  { name: 'actions', label: 'Actons', field: 'actions', align: 'left' }
]
