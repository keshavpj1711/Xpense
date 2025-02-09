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

  // Ensure the user was created successfully
  const user = data.user;
  if (!user) throw new Error("User signup failed");

  // Insert into profiles table
  // Since we will also be using the profiles table to add new features in future
  const { error: profileError } = await supabase
    .from("profiles")
    .insert([
      {
        id: user.id, // Use the same ID from auth.users
        username: userName,
        avatar_url: "", // Can be updated later
        preferred_currency: "INR", // Default currency, update as needed
        created_at: new Date().toISOString(),
      },
    ]);

  if (profileError) throw new Error(profileError.message);

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

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw new Error(error.message);
  }
}