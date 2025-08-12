import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function DesktopMenu({ menu }) {
  const [isHovering, setIsHovering] = useState(false);

  const hasSubMenu = menu?.subMenu?.length;
  const index = menu.id;

  const handleItemClick = () => setIsHovering(false);   // 🆕 close on click

  const subMenuAnimate = {
    initial: { opacity: 0, rotateX: -15, display: "none" },
    animate: {
      opacity: 1,
      rotateX: 0,
      display: "block",
      transition: { duration: 0.2 },
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: { duration: 0.2 },
      transitionEnd: { display: "none" },
    },
  };

  return (
    <motion.li
      className="group/link relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      key={menu.name}
    >
      <span className="flex gap-1 hover:bg-white/5 cursor-pointer px-3 py-1 rounded-xl">
        {menu.name}
        {hasSubMenu && (
          <ChevronDown
            size={20}
            className={`mt-[0.6px] transition-transform duration-200 ${
              isHovering ? "rotate-180" : ""
            }`}
          />
        )}
      </span>

      <AnimatePresence>
        {hasSubMenu && isHovering && (
          <motion.div
            key="submenu"
            className="sub-menu absolute top-full px-10 mt-0 bg-black/95 p-6 rounded-lg shadow-lg w-max z-50"
            style={{
              marginLeft:
                index === 1
                  ? "-300px"
                  : index === 2
                  ? "-350px"
                  : index === 3
                  ? "-400px"
                  : index === 4
                  ? "-550px"
                  : `-${index * 120}px`,
            }}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={subMenuAnimate}
          >
            <div
              className={`grid ${
                menu.gridCols === 3
                  ? "grid-cols-3 gap-6"
                  : menu.gridCols === 2
                  ? "grid-cols-2 gap-5"
                  : "grid-cols-1 gap-4"
              }`}
            >
              {menu.subMenu.map((submenu, i) => (
                <Link
                  key={i}
                  href={submenu.link || "#"}
                  onClick={handleItemClick}   // 🆕 close submenu
                >
                  <div className="relative cursor-pointer">
                    {menu.gridCols > 1 && menu?.subMenuHeading?.[i] && (
                      <p className="mb-5 text-white font-semibold text-lg">
                        {menu.subMenuHeading[i]}
                      </p>
                    )}
                    <div className="flex items-center gap-4 group/menubox">
                      <div className="bg-black w-fit p-2 rounded-md group-hover/menubox:bg-white group-hover/menubox:text-black duration-300">
                        {submenu.icon && <submenu.icon />}
                      </div>
                      <div>
                        <h6 className="font-semibold">{submenu.name}</h6>
                        <p className="text-sm text-gray-400">{submenu.desc}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
}
