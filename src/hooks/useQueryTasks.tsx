import { useQuery } from "react-query";
import { supabase } from "../../utils/supabase";
import { Task } from "@/interface/interface";

export const useQueryTasks = () => {
  const getTasks = async () => {
    console.log('useQueryTasks:getTask');
    const {data: todos, error} = await supabase
    .from('todos')
    .select('*')
    .order('created_at',{ascending: true});
    if(error)throw new Error;
    return todos;
  }
  return useQuery({
    queryKey: 'todos',
    queryFn: getTasks,
    staleTime: Infinity
  })
};