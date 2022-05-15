import { create } from "apisauce";

const DEMO_API = "https://rush-hour-jam-4mgu58xfh-dh-lame.vercel.app/";
const LOCAL_API = "http://localhost:3000";

const BACKEND_API = create({
  baseURL: DEMO_API,
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

export const fetchEvents = async () => {
  try {
    const response = await BACKEND_API.get("/event");
    if (response.status >= 400) {
      throw new Error("Something went wrong!");
    }
    return response.data;
  } catch (error) {
    return [];
  }
};
