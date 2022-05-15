import { Spinner, Flex } from "@chakra-ui/react";
import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchEvents } from "../api/backend-api";

const DashboardContext = createContext({});
export const useDashboardContext = () => useContext(DashboardContext);

export const DashboardProvider = ({ children }) => {
  const [events, setEvents] = useState(undefined);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const init = async () => {
      setLoading(true);
      const events = await fetchEvents();
      setEvents(events);
      setLoading(false);
    };
    init();
  }, []);

  if (isLoading || !events) {
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
    <DashboardContext.Provider value={{ events, setEvents }}>
      {children}
    </DashboardContext.Provider>
  );
};
