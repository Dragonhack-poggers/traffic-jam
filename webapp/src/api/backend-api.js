import { create } from "apisauce";

const BACKEND_API = create({
  baseURL: "http://localhost:3000",
});

export const notifyForTrafficJam = async (data) => {
  console.log({ data });
  const response = await BACKEND_API.post("/event", data);
  if (response.status >= 400) {
    throw new Error("Something went wrong!");
  }

  return true; // ALL GOOOD
};

export const updateUserScore = async (data) => {
  console.log({ data });
  const response = await BACKEND_API.post("/update-user", data);
  if (response.status >= 400) {
    throw new Error("Something went wrong!");
  }

  return true; // ALL GOOOD
};
