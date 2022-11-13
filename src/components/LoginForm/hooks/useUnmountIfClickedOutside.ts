import { useEffect, Dispatch, SetStateAction } from 'react';

export const useUnmountIfClickedOutside = (
  ref: React.MutableRefObject<HTMLDivElement>,
  cb: Function
) => {
  const handleClick = (e: React.BaseSyntheticEvent | MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target)) {
      cb();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  });
};

export default useUnmountIfClickedOutside;
