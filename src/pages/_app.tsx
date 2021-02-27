import '../styles/global.css'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

import { library } from '@fortawesome/fontawesome-svg-core'

import ThemeContainer from '../contexts/theme/ThemeContainer'

function MyApp({ Component, pageProps }) {
    library.add(faMoon, faSun)

    return (
      <ThemeContainer>
        <Component {...pageProps} />
      </ThemeContainer>
  )
}

export default MyApp
