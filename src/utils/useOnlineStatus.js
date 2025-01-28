import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  // try to check if online

  const[onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
        setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
        setOnlineStatus(true);
    });
  }, []);

  //boolean value
  return onlineStatus;
};

export default useOnlineStatus;
