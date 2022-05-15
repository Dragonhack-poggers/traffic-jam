import { Spinner, Flex } from "@chakra-ui/react";
import React, { createContext, useContext, useEffect, useState } from "react";
import supabase from "../utils/supabase";

const AppContext = createContext({});
export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);
  const [isLoading, setLoading] = useState(false);

  console.log(user);

  useEffect(() => {
    const init = async () => {
      setLoading(true);
      const session = supabase.auth.session();
      if (session?.user) {
        const { user } = session;
        setUser(user);
      } else {
        setUser('Please confirm e-mail')
      }
      setLoading(false);
    };
    init();
  }, []);

  if (isLoading) {
    return (
      <Flex
        position={"absolute"}
        w='100%'
        h='100vh'
        justifyContent={"center"}
        alignItems='center'>
        <Spinner size='lg' />
      </Flex>
    );
  }

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};
