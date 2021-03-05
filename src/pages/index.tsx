import { GetServerSideProps } from "next";
import { useSession } from "next-auth/client";
import { Box, Flex, Grid, useColorModeValue } from '@chakra-ui/react'

import { ChallengesProvider } from "../contexts/ChallengesContext";

import SideNavBar from "../components/SideNavBar";
import { ExperienceBar } from "../components/ExperienceBar";
import { CountdownProvider } from "../contexts/CountdownContext";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Profile } from "../components/Profile";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";
import Head from "next/head";
import Login from "./login";

interface HomeProps {
  level: number
  currentExperience: number
  challengesCompleted: number
  iat: number
  expiration: number
}

export default function App(props: HomeProps) {
  const [session, loading] = useSession()

  const backgroundMode = useColorModeValue('white', 'gray.700')

  return (
    <>{
      session ? 
      <ChallengesProvider 
        level={props.level} 
        currentExperience={props.currentExperience}
        challengesCompleted={props.challengesCompleted}
      >
        <Head>
            <title>Início | move.it</title>
        </Head>
        <Box as="div" display="flex" >
          <SideNavBar />
          <Flex as="div" direction="column"
            height="100vh"
            maxWidth="992px"

            margin="0 auto"
            padding="2.5rem 2.5rem"
          >
            <ExperienceBar></ExperienceBar>
    
            <CountdownProvider>
              <Grid as="section"
                flex="1"
                gap="6.25rem"
                templateColumns="1fr 1fr"

                alignContent="center"
              >
                <Box as="div">
                  <Profile />
                  <CompletedChallenges />
                  <Countdown />
                </Box>
                <Box as="div" background={backgroundMode} >
                  <ChallengeBox />
                </Box>
              </Grid>
            </CountdownProvider>
          </Flex>
        </Box>
      </ChallengesProvider> : <Login />
    }
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Chamada API
  const { level, currentExperience, challengesCompleted, iat, expiration } = ctx.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
      iat: Number(iat),
      expiration: Number(expiration)
    }
  }
}