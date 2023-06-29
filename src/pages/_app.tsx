import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { supabase } from '../../utils/supabase';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
})

export default function App({ Component, pageProps }: AppProps) {
  const {push,pathname} = useRouter();
  // const validateSession = () => {
  //   const user = supabase.auth.user();
  //   if(user&&pathname=='/'){
  //     push('/dashboard')
  //   }else if (!user&&pathname!='/'){
  //     push('/')
  //   }
  // }
  supabase.auth.onAuthStateChange((event,_)=>{
    if(event==="SIGNED_IN"&&pathname=='/'){
      push('/dashboard');
    }else if(event==="SIGNED_OUT"&&pathname!='/'){
      push('/')
    }
  });

  useEffect(()=> {
    console.log('validateSession')
    // validateSession();
  },[]);

  return (
  <QueryClientProvider client={queryClient}>
    <Component {...pageProps} />
    <ReactQueryDevtools initialIsOpen={true}/>
  </QueryClientProvider>
  )
}
