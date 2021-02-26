import { useState } from 'react'

import '../styles/global.css'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

import { ChallengesContext, ChallengesProvider } from '../contexts/ChallengesContext'
import { CountdownContext, CountdownProvider } from '../contexts/CountdownContext'
import { library } from '@fortawesome/fontawesome-svg-core'

import ThemeContainer from '../contexts/theme/ThemeContainer'

function MyApp({ Component, pageProps }) {
    library.add(faMoon, faSun)

    return (
      <ThemeContainer>
        <ChallengesProvider>
          <Component {...pageProps} />
        </ChallengesProvider>
      </ThemeContainer>
  )
}

export default MyApp
