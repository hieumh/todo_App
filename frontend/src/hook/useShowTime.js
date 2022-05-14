import { useEffect, useState } from "react";
import moment from "moment";

export default function useShowTime() {
  const [time, setTime] = useState(moment().format('MMMM Do YYYY, h:mm:ss a'))
  useEffect(() => {
    const timeInterval = setInterval(() => {
        setTime(moment().format('MMMM Do YYYY, h:mm:ss a'))
    }, 1000);

    return () => {
      if (timeInterval) clearInterval(timeInterval);
    };
  }, [time]);

  return time
}
