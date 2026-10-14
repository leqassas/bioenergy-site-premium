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
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    <IconButton
      aria-label="Scroll to top"
      isActive={false}
      onClick={scrollToTop}
      border={"2px solid white"}
      icon={<BiUpArrow />}
      rounded="full"
      color="white"
      _hover={{ opacity: "0.8", transform: "scale(1.1)" }}
      bgColor="prim"
      pos={"fixed"}
      zIndex={"tooltip"}
      bottom={["1.5rem", "2rem", "3rem"]}
      right={["1.5rem", "2rem", "3rem"]}
      opacity={visible ? 1 : 0}
      pointerEvents={visible ? "auto" : "none"}
      transition="all 0.3s ease"
    />
  );
}
