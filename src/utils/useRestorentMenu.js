import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestorentMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  // fetch data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch((MENU_API + resId));
    const jsonData = await res.json();
    const data = jsonData.data;
    console.log("HookData",data)
    setResInfo(data);
  };
  return resInfo;
};

export default useRestorentMenu;
