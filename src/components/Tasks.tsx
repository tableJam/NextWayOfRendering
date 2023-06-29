import React from 'react'
import { useQueryTasks } from '@/hooks/useQueryTasks';
import { Task } from '@/interface/interface';
function Tasks() {
  const {data:todos,status} = useQueryTasks();
  console.log('useQuery↑',status);
  return (
    <>
    {status==='success'&&todos.map(todo=>
     <li key={todo.id} className="flex-start flex flex-col hover:text-blue-500 text-lg duration-300 w-6/12">
      <p className="text-lg font-extrabold">{todo.title}</p>
      <p className="text-xs font-normal text-gray-100">{todo.created_at}</p>
    </li>
    )}
    </>
  )
}

export default Tasks;