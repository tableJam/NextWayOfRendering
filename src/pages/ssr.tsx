import { GetServerSideProps } from "next"
import Layout from "@/components/Layout"
import { supabase } from "../../utils/supabase";
import {Task,Notice} from '../interface/interface';
import { useRouter } from "next/router";
import Link from "next/link";
interface ServerSideProp {
  todos:Task[],
  notice:Notice[]
}

export const getServerSideProps =async() => {
  const { data: notice, error:errorNotice } = await supabase
  .from('notice')
  .select('*')

  const { data: todos, error:errorTodo } = await supabase
  .from('todos')
  .select('*')
  console.log(errorNotice,errorTodo)
  return {props:{notice,todos}}
}

const Ssr = (prop:ServerSideProp) => {
  const router = useRouter();
  const todos = prop.todos;
  const notice = prop.notice;
  return (
    <Layout title="ssg">
    <p className="mb-3 text-green-300">staticSiteGenerate</p>
    {
      todos?.length ? todos.map(todo => {
        return (
          <>
            <li key={todo.id} className="flex-start flex flex-col hover:text-blue-500 text-lg duration-300 w-6/12">
              <p className="text-lg font-extrabold">{todo.title}</p>
              <p className="text-xs font-normal text-gray-100">{todo.created_at}</p>
            </li>
          </>
        )
      }) : <p className="mb-3 text-gray-300">📡 NO Todo</p>
    }
  
     {
      notice?.length ? notice.map(n => {
        return (
          <>
            <li key={n.id} className="mt-10 flex-start flex flex-col hover:text-blue-500 text-lg duration-300 w-6/12">
              <p className="text-lg font-extrabold">{n.content}</p>
              <p className="text-xs text-white border-gray-100 font-normal">{n.created_at}</p>
            </li>
          </>
        )
      }) : <p className="mb-3 text-gray-300">📡 NO Notice</p>
    }
    <div className="flex mt-10 ml-3 flex-start items-center justify-center w-3/12">
      <button className="mr-3 text-xs" onClick={()=>{router.push('/ssg')}}>🎁ssr</button>
      <Link href="/ssr" prefetch={false}>
        <a className="mr-3 text-xs text-gray-100">💡ssr</a>
      </Link>
    </div>
   </Layout>
  )
}

export default Ssr