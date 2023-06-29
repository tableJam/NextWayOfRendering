import Layout from '@/components/Layout'
import Image from 'next/image'
import { useMuteAuth } from '@/hooks/useAuthMute'
import { useState } from 'react';

export default function Home() {
  const [isLogin,setIsLogin] = useState(false);
  const {
    email,
    setEmail,
    password,
    setPassword,
    loginMutation,
    registerMutation,
  } = useMuteAuth();
  const login = () => {
    if(isLogin)registerMutation.mutate()
    else loginMutation.mutate();
  }
  return (
  <>
    <Layout title="login">
      <input value={email} type="email" placeholder='input email' className='mb-3 w-6/12 bg-black text-lg font-mono' onChange={(e) => {setEmail(e.target.value)}}/>
      <input value={password} type="password" placeholder='input password' className='mb-3 w-6/12 bg-black text-lg font-mono' onChange={(e) => {setPassword(e.target.value)}}/>
      <h1 className='text-xs cursor-pointer' onClick={login}>🫥login</h1>
    </Layout>
  </>
  )
}
