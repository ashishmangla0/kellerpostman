import { useEffect, useState } from "react";

const useMedia = () => {
  const mediaType = ["Mobile", "Desktop"];
  const medaiQueries = ["(max-width: 767.98px)", "(min-width:768px)"];
  const mediaList = medaiQueries.map((q) => window.matchMedia(q));

  const getValue = () => {
    const indexValue = mediaList.findIndex((mql) => mql.matches);
    return indexValue;
  };
  const [value, setValue] = useState(getValue);
  useEffect(() => {
    const handler = () => setValue(getValue);
    try {
      mediaList?.forEach((mql) => {
        if (mql.addEventListener) {
          mql.addEventListener("change", handler);
        }
      });
    } catch (e1) {
      console.log(e1);
    }
  }, [value]);
  return mediaType[value];
};

export default useMedia;
