import { useMutation } from "react-query";
import { useState } from "react";
import { supabase } from "../../utils/supabase";

export const useMuteAuth = () => {
  const [email,setEmail] = useState<string>('');
  const [password,setPassword] = useState<string>('');
  const reset = () => {setPassword('')};
  const loginMutation = useMutation(
    async () => {
      const {error} = await supabase.auth.signIn({email,password});
      if(error)throw new Error(error.message);
    },{
      onError: (error) => {
        console.log(error);
        reset();
      }
    }
  );
  const registerMutation = useMutation(
    async () => {
      const { error } = await supabase.auth.signUp({ email, password })
      if (error) throw new Error(error.message)
    },
    {
      onError: (err: any) => {
        alert(err.message)
        reset()
      },
    }
  )
  return {
    email,
    setEmail,
    password,
    setPassword,
    loginMutation,
    registerMutation,
  }
}