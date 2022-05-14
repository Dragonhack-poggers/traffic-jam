import { useState, useEffect } from "react";

const useLocation = () => {
  const [location, setLocation] = useState(undefined);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
        setLocation({
          lng: position.coords.longitude,
          lat: position.coords.latitude,
        });
      });
    }
  }, []);
  return { location };
};

export default useLocation;
