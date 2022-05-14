import supabase from "../utils/supabase";

export const loginUser = async ({ email, password }) => {
  const { user, error } = await supabase.auth.signIn({
    email,
    password,
  });

  if (error !== null) {
    throw new Error("Error when logging in");
  }

  return user;
};

export const registerUser = async ({ email, password }) => {
  const { user, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error !== null) {
    throw new Error("Error when registering");
  }

  return user;
};

export const logoutUser = async () => await supabase.auth.signOut();
