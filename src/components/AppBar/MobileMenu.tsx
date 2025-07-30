"use client";
import { NAV_ROUTES } from "@/components/AppBar/AppBar";
import NavLink from "@/components/AppBar/NavLink";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu } from "lucide-react";
import { useState } from "react";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="lg:hidden">
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger>
          <Menu className="text-purple-600"/>
        </DrawerTrigger>
        <DrawerContent className="p-5 pb-8 bg-[#141414]  border-none">
          <DrawerHeader>
            <DrawerTitle className="hidden">Navigation Menu</DrawerTitle>
            <DrawerDescription className="flex flex-col gap-4">
              {NAV_ROUTES.map(({ href, label }) => (
                <NavLink
                  key={href}
                  href={href}
                  className="text-lg"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </NavLink>
              ))}
            </DrawerDescription>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
export default MobileMenu;
