import { useContext } from "react";
import { AppContext } from "../context";

const useGlobalHook = () => {
  return useContext(AppContext);
};

export default useGlobalHook;
