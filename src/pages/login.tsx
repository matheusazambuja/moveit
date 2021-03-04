import {
  useSession, signIn
} from 'next-auth/client'

import Head from 'next/head';

import { Box, Button, Flex, Img, Text } from '@chakra-ui/react'

export default function Login() {
  const [session, loading] = useSession();

  return (
    <>
      { !session && (
        <Flex as='div'
          height='100vh'
          background='blue.600'
          padding='0 0rem'
          alignItems='center'
          justifyContent='center'
        >
          <Head>
            <title>Login | move.it</title>
          </Head>

          <Box as='section' flex='1' >
            <header>
              <Img src='/icons/beans.svg' marginBottom='4rem' />
            </header>
          </Box>

          <Box as='div'
            marginRight='15rem'
          >
            <Img src="logo-full.svg" alt="Logo" />
            <Text as='strong'
              color='white'
              fontSize='2rem'
              fontWeight='medium'
            >
              Bem-vindo
            </Text>

            <Flex as='div'
              width='17rem'
              color='white'
              filter='brightness(0.8)'

              marginTop='1rem'
              marginBottom='2.6rem'

              alignItems='center'
              justifyContent='center'
            >
              <Img src="github-light.png" alt="Github Logo" marginTop='0.5rem' />
              <Text as='p'
                paddingLeft='1.2rem'
              >
                Faça login com seu Github para começar
              </Text>
            </Flex>

            <Flex as='div'
              alignItems='center'
            >
              <Button onClick={(): Promise<void> => signIn('github')}
                width='7rem'
                height='3.5rem'

                background='blackAlpha.500'
                color='white'
                margin='0 0.5rem'

                transition='background 200ms'

                _hover={{
                  background: 'blackAlpha.700'
                }}
              >
                GitHub
              </Button>
            </Flex>
          </Box>

        </Flex>
      )}
    </>
  )
}