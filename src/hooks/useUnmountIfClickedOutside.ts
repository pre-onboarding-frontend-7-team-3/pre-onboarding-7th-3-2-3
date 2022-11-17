import { useEffect, Dispatch, SetStateAction, RefObject } from "react";

export const useUnmountIfClickedOutside = (
  ref: RefObject<HTMLFormElement> | undefined,
  callback: (toggleEvent: boolean) => void
) => {
  const handleClick = (e: React.BaseSyntheticEvent | MouseEvent) => {
    if (!ref) return;
    if (ref.current && !ref.current.contains(e.target)) {
      callback(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  });
};

export default useUnmountIfClickedOutside;
