import supabase from "./supabase";

export async function login({email, password}) {
  const {data, error} = await supabase.auth.signInWithPassword({
    email, 
    password,
  });

  if(error) throw new Error(error.message);

  return data;
}

export async function signup({userName, email, password}){
  const { data, error } = await supabase.auth.signUp({
    userName, 
    email,
    password,
  });

  if(error) throw new Error(error.message);

  return data;
}
  