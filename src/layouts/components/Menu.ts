import { Menu } from './types'

export const menus:Menu[] = [
  {
    to: 'dashboardAdmin',
    icon: 'grid_view',
    isDivider: false,
    isTitle: false,
    text: 'Dashboard'
  },
  {
    isTitle: true,
    text: 'Table',
    isDivider: false,
    icon: ''
  },
  {
    icon: 'table_chart',
    isDivider: false,
    isTitle: false,
    text: 'Table',
    child: [
      {
        icon: 'chevron_right',
        text: 'Default Table',
        to: 'tableAdmin'
      },
      {
        icon: 'chevron_right',
        text: 'Pagination Table',
        to: 'tablePaginationAdmin'
      }
    ]
  },
  {
    isTitle: true,
    text: 'Components',
    isDivider: false,
    icon: ''
  },
  {
    icon: 'apps',
    isDivider: false,
    isTitle: false,
    text: 'UI Elements',
    child: [
      {
        icon: 'chevron_right',
        text: 'Button',
        to: 'buttonAdmin'
      },
      {
        icon: 'chevron_right',
        text: 'Card',
        to: 'cardAdmin'
      },
      {
        icon: 'chevron_right',
        text: 'Tab',
        to: 'tabAdmin'
      }
    ]
  },
  {
    icon: 'list_alt',
    isDivider: false,
    isTitle: false,
    text: 'Forms',
    child: [
      {
        icon: 'chevron_right',
        text: 'Card',
        to: 'tableAdmin'
      }
    ]
  }
]
