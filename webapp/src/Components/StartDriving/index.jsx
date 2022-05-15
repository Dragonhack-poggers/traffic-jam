import { IconButton, Flex } from "@chakra-ui/react";
import { PhoneIcon, AtSignIcon } from "@chakra-ui/icons";
import { FaCar } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { notifyForTrafficJam } from "../../api/backend-api";
import { mockEvent } from "../../utils/mock-data-util";
import useLocation from "../../hooks/useLocation";

const NEARBY_DEVICES_LIMIT = 50;
const FIVE_SECONDS = 5 * 1000;

const StartDriving = () => {
  const [isDriving, setDriving] = useState(false);
  const { location } = useLocation();
  const [nearbyDevices, setNearbyDevices] = useState(0);
  const toggleDriving = () => setDriving(!isDriving);

  useEffect(() => {
    const fetchNearbyBluetoothDevices = async () => {
      try {
        const devices = await navigator.bluetooth.getDevices();
        if (!devices || devices.length === 0) {
          // return setNearbyDevices(0);
          throw new Error("use mock data for demo purposes");
        }
        setNearbyDevices(devices.length);
      } catch (e) {
        const { numberOfDevices } = mockEvent();
        setNearbyDevices(numberOfDevices);
      }
    };

    const subscription = setInterval(
      isDriving ? fetchNearbyBluetoothDevices : () => {},
      FIVE_SECONDS
    );
    // fetchNearbyBluetoothDevices();
    return () => clearInterval(subscription);
  }, [isDriving]);

  useEffect(() => {
    const triggerTrafficJamEvent = async () => {
      const data = {
        numberOfDevices: nearbyDevices,
        lat: location.lat,
        long: location.lng,
      };
      await notifyForTrafficJam(data);
    };

    if (nearbyDevices >= NEARBY_DEVICES_LIMIT) {
      triggerTrafficJamEvent();
    }
  }, [nearbyDevices]);

  return (
    <Flex w='100%' alignItems={"center"} justifyContent='center'>
      <IconButton
        onClick={toggleDriving}
        p={12}
        icon={
          isDriving ? <FaCar size='3em' color='green' /> : <FaCar size='3em ' />
        }
        isRound
        marginTop={"3em"}
      />
    </Flex>
  );
};

export default StartDriving;
