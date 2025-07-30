"use client";

import { cn } from "@/lib/utils";
import { Link, useLocation } from "@tanstack/react-router";
import type { PropsWithChildren } from "react";

type Props = {
  href: string;
  className?: string;
  onClick?: () => void;
};

const NavLink = ({
  href,
  children,
  className,
  onClick,
}: PropsWithChildren<Props>) => {
  const pathname = useLocation({ select: (location) => location.pathname });

  const isActive = pathname === href;

  return (
    <Link
      onClick={onClick}
      to={href}
      className={cn(isActive ? "text-pink-400" : "text-[#B3B3B3]", className)}
    >
      {children}
    </Link>
  );
};

export default NavLink;
