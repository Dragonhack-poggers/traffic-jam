import { create } from "apisauce";

const BACKEND_API = create({
  baseURL: "localhost:3000",
});

export const notifyForTrafficJam = async () => {
  console.log("NOTIFY");
};
