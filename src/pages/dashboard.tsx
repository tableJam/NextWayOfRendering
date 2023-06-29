import Layout from '@/components/Layout'
import React from 'react'
import { supabase } from '../../utils/supabase';
import { useQueryClient } from 'react-query';
import { useMuteAuth } from '@/hooks/useAuthMute';
import Tasks from '@/components/Tasks';
function Dashboard() {
  const {loginMutation} = useMuteAuth();
  const queryClient = useQueryClient();
  const logout = () => {
    supabase.auth.signOut();
    queryClient.removeQueries('todos')
    queryClient.removeQueries('notices')
  };

  return (
    <Layout title="Dashboard">
      <div className="rounded-2xl items-center border-gray-400 w-1/12">
        <p className="font-extrabold text-lg cursor-pointer flex-end" onClick={()=>{logout()}}>🕳</p>
        <p className="font-extrabold text-lg cursor-pointer flex-end" onClick={()=>{logout()}}>🔌</p>
      </div>
      <Tasks/>
    </Layout>
  )
}

export default Dashboard