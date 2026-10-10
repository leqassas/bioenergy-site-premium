import { useEffect, useState } from "react";
import { BiUpArrow } from "react-icons/bi";
import { IconButton } from "@chakra-ui/react";

export default function ScrollBtn() {
  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
        setVisible(true);
      } else if (scrolled <= 300) {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisible);
  }, []);

  return (
    <IconButton
      isActive={false}
      onClick={scrollToTop}
      border={'2px solid white'}
      icon={<BiUpArrow />}
      rounded="full"
      color="white"
      _hover={{ opacity: "0.7" }}
      bgColor="prim"
      pos={"fixed"}
      zIndex={"tooltip"}
      bottom={"3rem"}
      right={"3rem"}
      visibility={!visible && "hidden"}
    />
  );
}
