import supabase from "./supabase";

export async function login({email, password}) {
  const {data, error} = await supabase.auth.signInWithPassword({
    email, 
    password,
  });

  if(error) throw new Error(error.message);

  return data;
}

export async function signup({first_name, last_name, email, password}){
  const { data, error } = await supabase.auth.signUp({
    first_name, 
    last_name, 
    email,
    password,
  });

  if(error) throw new Error(error.message);

  return data;
}
  