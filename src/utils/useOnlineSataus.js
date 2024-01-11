import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [isOnlineStatus, setIsonlineSatatus] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => {
      setIsonlineSatatus(false);
    });

    window.addEventListener("online", () => {
      setIsonlineSatatus(true);
    });
  }, []);

  return isOnlineStatus;
};

export default useOnlineStatus;