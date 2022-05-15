import { IconButton, Flex, Text } from "@chakra-ui/react";
import { FaCar } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { notifyForTrafficJam } from "../../api/backend-api";
import { mockEvent } from "../../utils/mock-data-util";
import useLocation from "../../hooks/useLocation";
import { useAppContext } from "../../lib/AppContext";
import { differenceInMinutes, format } from "date-fns";
import { updateUserScore } from "../../api/backend-api";

const NEARBY_DEVICES_LIMIT = 89;
const FIVE_SECONDS = 5 * 1000;
const DATE_FORMAT = "hh:mm:ss";

const StartDriving = () => {
  const [isDriving, setDriving] = useState(false);
  const { location } = useLocation();
  const [nearbyDevices, setNearbyDevices] = useState(0);
  const [drivingSince, setDrivingSince] = useState(0);

  const updateUser = async (minutes) => {
    await updateUserScore({ userId: user?.id, time: minutes });
  };

  const toggleDriving = () => {
    if (!isDriving) {
      setDrivingSince(new Date());
    } else {
      const now = new Date();
      const minutes = differenceInMinutes(now, drivingSince);
      if (minutes > 0 && !!user) {
        updateUser(minutes);
      }
    }
    setDriving(!isDriving);
  };
  const { user } = useAppContext();

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

    if (!setDriving) {
      clearInterval(drivingTimeSubscription);
    }
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
    <Flex
      w='100%'
      alignItems={"center"}
      justifyContent='center'
      flexDir={"column"}
      gap={4}>
      <IconButton
        onClick={toggleDriving}
        p={12}
        icon={
          isDriving ? <FaCar size='3em' color='green' /> : <FaCar size='3em ' />
        }
        isRound
        marginTop={"3em"}
      />
      {isDriving && (
        <>
          <Text textAlign={"center"} fontWeight='bold'>{`Driving since ${format(
            drivingSince,
            DATE_FORMAT
          )}.`}</Text>
          <Text textAlign={"center"} fontWeight='bold'>{`Time now ${format(
            new Date(),
            DATE_FORMAT
          )}.`}</Text>
        </>
      )}
    </Flex>
  );
};

export default StartDriving;
