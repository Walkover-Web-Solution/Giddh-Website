import DownloadFreeModal from "@/components/downloadFreeModal";
import { MdKeyboardArrowUp } from "react-icons/md";
import { useState, useEffect, useCallback } from "react";

const globalComponents = () => {
  const [scrollStatus, setscrollStatus] = useState(false);

  const onScroll = useCallback((event) => {
    const { scrollY } = window;
    if (scrollY >= 120) {
      setscrollStatus(true);
    } else {
      setscrollStatus(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, []);
  return (
    <>
      {/*Download Free Modal Used In All Feature Pages*/}
      <DownloadFreeModal />
      <div 
      className="back-to-top" 
      style={{ display : scrollStatus ? "block" : "none", animation : scrollStatus ? "fade-in 200ms ease-in" : null }}
      onClick={ ()=> { window.scrollTo(0, 0); }}
      >
        <MdKeyboardArrowUp />
      </div>
    </>
  );
};

export default globalComponents;
