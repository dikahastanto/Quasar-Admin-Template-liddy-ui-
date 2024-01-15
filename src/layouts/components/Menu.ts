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
    to: 'tableAdmin'
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
        text: 'Dialog',
        to: 'dialogAdmin'
      },
      {
        icon: 'chevron_right',
        text: 'Notify',
        to: 'notifyAdmin'
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
    to: 'formAdmin'
  },
  {
    isTitle: true,
    text: 'Pages & Apps',
    isDivider: false,
    icon: ''
  },
  {
    icon: 'security',
    isDivider: false,
    isTitle: false,
    text: 'Auth',
    child: [
      {
        icon: 'chevron_right',
        text: 'Login',
        to: 'loginPage'
      },
      {
        icon: 'chevron_right',
        text: 'Register',
        to: 'registerPage'
      }
    ]
  },
  {
    to: 'notesAppAdmin',
    icon: 'description',
    isDivider: false,
    isTitle: false,
    text: 'Notes App'
  },
  {
    to: 'blankAdmin',
    icon: 'check_box_outline_blank',
    isDivider: false,
    isTitle: false,
    text: 'Blank Page'
  }
]
