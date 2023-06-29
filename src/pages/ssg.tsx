import Link from "next/link";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { GetStaticProps } from "next";
import Layout from "@/components/Layout";
import { supabase } from "../../utils/supabase";
import {Task,Notice} from "../interface/interface";

export const getStaticProps: GetStaticProps = async() => {
  console.log('getStaticProps/static site generate');
  console.log(supabase);

  let { data: notices, error:errorNotice } = await supabase
  .from('notice')
  .select('*')

  let { data: todoss, error:errorTodo } = await supabase
  .from('todos')
  .select('*')

  const TODOS = await supabase
  .from('todos')
  .select('*')
  const NOTICE = await supabase
  .from('notice')
  .select('*')

  const todos = TODOS.data;
  const notice = NOTICE.data;
  console.log(notices,errorNotice,'notices')
  console.log(todoss,errorTodo,'todos')
  return {props:{todos,notice}};
}

interface StaticProp {
  todos:Task[],
  notice:Notice[]
}

const Ssg:NextPage<StaticProp> = ({todos,notice}) => {
  return (
   <Layout title="ssg">
    <p className="mb-3 text-green-300">staticSiteGenerate</p>
    {
      todos.length ? todos.map(todo => {
        return (
          <>
            <li key={todo.id}>
              <p className="text-lg font-extrabold">{todo.title}</p>
              <p className="text-sm font-normal">{todo.created_at}</p>
            </li>
          </>
        )
      }) : <p className="mb-3 text-gray-300">📡 NO Todo</p>
    }
     {
      todos.length ? notice.map(n => {
        return (
          <>
            <li key={n.id}>
              <p className="text-lg font-extrabold">{n.content}</p>
              <p className="text-sm font-normal">{n.created_at}</p>
            </li>
          </>
        )
      }) : <p className="mb-3 text-gray-300">📡 NO Notice</p>
    }
   </Layout>
  )
}

export default Ssg