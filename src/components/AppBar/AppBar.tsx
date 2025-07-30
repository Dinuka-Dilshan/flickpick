import Logo from "@/components/AppBar/Logo";
import MobileMenu from "@/components/AppBar/MobileMenu";
import NavLink from "@/components/AppBar/NavLink";

export const NAV_ROUTES = [
  { href: "/movies", label: "Top Movies" },
  { href: "/tvs", label: "Top TVs" },
];

const AppBar = () => {
  return (
    <div className="bg-[#1A1A1A]/70 h-[8vh] flex justify-between px-5 lg:px-20 items-center w-full">
      <Logo />
      <div className="gap-4 hidden lg:flex">
        {NAV_ROUTES.map(({ href, label }) => (
          <NavLink key={href} href={href}>
            {label}
          </NavLink>
        ))}
      </div>
      <MobileMenu />
    </div>
  );
};

export default AppBar;
