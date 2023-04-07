import { createIcon } from '@chakra-ui/icons'

// using `path`
export const CloseButtonIcon = createIcon({
  displayName: 'CloseButtonIcon',
  viewBox: '0 0 26 25',
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: (
    <path stroke="#A3A3A3" stroke-linecap="round" stroke-width="2" d="M1.414 1 24 23.586M1.6 23.586 24.186 1"/>
    )
})


