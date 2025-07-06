"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { name: "Courses", href: "/devtuts" },
  { name: "Resources", href: "/devtuts/resources" },
  { name: "Settings", href: "/devtuts/settings" },
];

const Navbar = () => {
  const pathname = usePathname();

  const indicatorRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [positions, setPositions] = useState({ left: 0, width: 0 });


  useEffect(() => {
    const activeLink = containerRef.current?.querySelector(
      `[data-active="true"`
    ) as HTMLElement;

    if (activeLink && indicatorRef.current) {
      setPositions({
        left: activeLink.offsetLeft,
        width: activeLink.offsetWidth,
      });
    }
  }, [pathname]);

  return (
    <div className="relative border-b border-gray-200 dark:border-neutral-800 mt-3 max-md:mt-6">
      <div ref={containerRef} className="flex space-x-6 px-4 relative">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              data-active={isActive}
              className={clsx(
                "py-3 transition-colorss",
                isActive
                  ? "text-black dark:text-white font-medium"
                  : "text-gray-500 dark:text-gray-400"
              )}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
      <div
        ref={indicatorRef}
        className="absolute bottom-0 h-0.5 bg-black dark:bg-white transition-all duration-300"
        style={{
          left: positions.left,
          width: positions.width,
        }}
      />
    </div>
  );
};

export default Navbar;
