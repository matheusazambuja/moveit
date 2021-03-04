import { faMoon, faSun, faArrowRight, faSpinner, faHome, faSignOutAlt, faMedal } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import ThemeContainer from '../contexts/theme/ThemeContainer'

import { Provider } from 'next-auth/client'

export default function MyApp({ Component, pageProps }) {
  library.add(
    faMoon, faSun, faArrowRight, faSpinner,
    faHome, faSignOutAlt, faMedal 
  )

  return (
    <Provider session={pageProps.session}>
      <ThemeContainer>
        <Component {...pageProps} />
      </ThemeContainer>
    </Provider>
  )
}