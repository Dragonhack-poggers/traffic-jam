const MAX_DEVICES = 100;

export const mockEvent = () => {
  return {
    numberOfDevices: Math.floor(Math.random() * MAX_DEVICES),
  };
};
