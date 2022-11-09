import { NextPage } from 'next'
import { useSession, signIn } from 'next-auth/react'
import Head from 'next/head'

/**
 * HomePage component.
 */
export const HomePage: NextPage = () => {
  const { data: session, status } = useSession()

  return (
    <>
      <Head>
        <title>home - next13-app-template</title>
      </Head>

      <div>next13-app-template</div>
      <button onClick={() => signIn()}>signin</button>
      {status}
    </>
  )
}

export default HomePage
