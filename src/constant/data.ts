import { Props } from '../interfaces/Data'

export const data: Props[] = [
  {
    list: [
      {
        code: '<Input />',
        input: {}
      },
      {
        code: '&:hover',
        input: {
          isHover: true
        }
      },
      {
        code: '&:focus',
        input: {
          isFocus: true
        }
      }
    ]
  },
  {
    list: [
      {
        code: '<Input error />',
        input: {
          error: true
        }
      },
      {
        code: '&:hover',
        input: {
          error: true,
          isHover: true
        }
      },
      {
        code: '&:focus',
        input: {
          error: true,
          isFocus: true
        }
      }
    ]
  },
  {
    list: [
      {
        code: '<Input disabled />',
        input: {
          disabled: true
        }
      }
    ]
  },
  {
    list: [
      {
        code: "<Input helperText='Some interesting text' />",
        input: {
          helperText: 'Some interesting text'
        }
      },
      {
        code: "<Input helperText='Some interesting text' error />",
        input: {
          error: true,
          helperText: 'Some interesting text'
        }
      }
    ]
  },
  {
    list: [
      {
        code: '<Input startIcon />',
        input: {
          startIcon: 'phone'
        }
      },
      {
        code: '<Input endIcon />',
        input: {
          endIcon: 'lock'
        }
      }
    ]
  },
  {
    list: [
      {
        code: "<Input value='text' />",
        input: {
          value: 'Text'
        }
      }
    ]
  }
]
