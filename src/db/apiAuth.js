import supabase from "./supabase";

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function signup({ userName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        user_name: userName,
      }
    },
  });
  

  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  // To get the session information of the user stored in the local storage
  const { data: session, error } = await supabase.auth.getSession();

  if (!session.session) {
    return null;
  }
  if (error) {
    throw new Error(error.message);
  }
  return session.session?.user; // Returning the user session info if it exists
}