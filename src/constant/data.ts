import { Props } from '../interfaces/Data'

export const data: Props[] = [
  {
    list: [
      {
        code: '<Button />',
        button: {}
      },
      {
        code: '&:hover, &:focus',
        button: {
          isHover: true
        }
      }
    ]
  },
  {
    list: [
      {
        code: "<Button variant='outline' />",
        button: {
          variant: 'outline'
        }
      },
      {
        code: "&: hover, &: focus'",
        button: {
          variant: 'outline',
          isHover: true
        }
      }
    ]
  },
  {
    list: [
      {
        code: "<Button variant='text' />",
        button: {
          variant: 'text'
        }
      },
      {
        code: "&: hover, &: focus'",
        button: {
          variant: 'text',
          isHover: true
        }
      }
    ]
  },
  {
    list: [
      {
        code: '<Button disableShadow />',
        button: {
          disableShadow: true
        }
      }
    ]
  },
  {
    list: [
      {
        code: '<Button disabled />',
        button: {
          disabled: true
        }
      },
      {
        code: "<Button variant='text' disabled />",
        button: {
          variant: 'text',
          disabled: true
        }
      }
    ]
  },
  {
    list: [
      {
        code: "<Button startIcon='local_grocery_store' />",
        button: {
          color: 'primary',
          startIcon: 'local_grocery_store'
        }
      },
      {
        code: "<Button endIcon='local_grocery_store' />",
        button: {
          color: 'primary',
          endIcon: 'local_grocery_store'
        }
      }
    ]
  },
  {
    list: [
      {
        code: "<Button size='sm' />",
        button: {
          size: 'sm'
        }
      },
      {
        code: "<Button size='md' />",
        button: {
          size: 'md'
        }
      },
      {
        code: "<Button size='lg' />",
        button: {
          size: 'lg'
        }
      }
    ]
  },
  {
    list: [
      {
        code: "<Button color='default' />",
        button: {
          color: 'default'
        }
      },
      {
        code: "<Button color='primary' />",
        button: {
          color: 'primary'
        }
      },
      {
        code: "<Button color='secondary' />",
        button: {
          color: 'secondary'
        }
      },
      {
        code: "<Button color='danger' />",
        button: {
          color: 'danger'
        }
      }
    ]
  },
  {
    list: [
      {
        code: '&:hover, &:focus',
        button: {
          color: 'default',
          isHover: true
        }
      },
      {
        code: "<Button color='primary' />",
        button: {
          color: 'primary',
          isHover: true
        }
      },
      {
        code: "<Button color='secondary' />",
        button: {
          color: 'secondary',
          isHover: true
        }
      },
      {
        code: "<Button color='danger' />",
        button: {
          color: 'danger',
          isHover: true
        }
      }
    ]
  }
]
