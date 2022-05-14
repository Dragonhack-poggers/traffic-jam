import { IconButton, Flex } from "@chakra-ui/react"
import { PhoneIcon, AtSignIcon } from "@chakra-ui/icons"
import React, { useState, useEffect } from "react"
import { notifyForTrafficJam } from "../../api/backend-api"

const NEARBY_DEVICES_LIMIT = 2
const THIRTY_SECONDS = 1 * 1000

const StartDriving = () => {
  const [isDriving, setDriving] = useState(false)
  const [nearbyDevices, setNearbyDevices] = useState(0)
  const toggleDriving = () => setDriving(!isDriving)

  const iconProps = { w: 6, h: 6 }

  useEffect(() => {
    const fetchNearbyBluetoothDevices = async () => {
      console.log("triggered")
      const devices = await navigator.bluetooth.getDevices()
      console.log(devices)
      if (!devices) {
        return setNearbyDevices(0)
      }
      setNearbyDevices(devices.length)
    }

    const subscription = setInterval(
      isDriving ? fetchNearbyBluetoothDevices : () => {},
      THIRTY_SECONDS
    )
    return () => clearInterval(subscription)
  }, [isDriving])

  useEffect(() => {
    const triggerTrafficJamEvent = async () => {
      await notifyForTrafficJam()
    }

    if (nearbyDevices >= NEARBY_DEVICES_LIMIT) {
      triggerTrafficJamEvent()
    }
  }, [nearbyDevices])

  return (
    <Flex w="100%" alignItems={"center"} justifyContent="center" mt={8}>
      <IconButton
        onClick={toggleDriving}
        p={12}
        icon={
          isDriving ? (
            <PhoneIcon {...iconProps} />
          ) : (
            <AtSignIcon {...iconProps} />
          )
        }
        isRound
      />
    </Flex>
  )
}

export default StartDriving
