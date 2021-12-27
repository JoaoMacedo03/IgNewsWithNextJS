import { signIn, signOut, useSession } from 'next-auth/react'
import styles from './styles.module.scss'

interface SubscribeButtonProps {
  priceId: string;
}

//getServerSideProps (SSR - Server Side Rendering)
//getStaticProps (SSG - Static Site Generation)
//API routes

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const { data: session } = useSession()

  function handleSubcribe() {
    if(!session) {
      signIn('github')
      return
    }

    //Criação da checkout session

    
  }

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubcribe}
    >
      Subscribe Now
    </button>
  )
}