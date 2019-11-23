import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

interface ScrollToTopPropsType {
  children: any;
}

const ScrollToTop = ({ children }: ScrollToTopPropsType) => {
  const history = useHistory();

  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    });
    return () => {
      unlisten();
    };
  }, [history]);

  return <>{children}</>;
};

export default ScrollToTop;
