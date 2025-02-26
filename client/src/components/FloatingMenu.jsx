import { FloatingDock } from "./ui/floating-dock";

import {
  IconUserCircle,
  IconHome,
  IconAddressBook,
  IconBrandBlogger,
  IconLetterASmall,
  IconPencilPlus,
  IconLogout,
} from "@tabler/icons-react";

const FloatingMenu = () => {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-purple-800 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "Blogs",
      icon: (
        <IconBrandBlogger className="h-full w-full text-black dark:text-neutral-300" />
      ),
      href: "/blogs",
    },
    {
      title: "Create a Blog",
      icon: (
        <IconPencilPlus className="h-full w-full text-black dark:text-neutral-300" />
      ),
      href: "/add-blog",
    },

    {
      title: "Profile",
      icon: (
        <IconUserCircle className="h-full w-full text-black dark:text-neutral-300" />
      ),
      href: "/profile",
    },

    {
      title: "About",
      icon: (
        <IconLetterASmall className="h-full w-full text-black dark:text-neutral-300" />
      ),
      href: "/about",
    },

    {
      title: "Contact",
      icon: (
        <IconAddressBook className="h-full w-full text-black dark:text-neutral-300" />
      ),
      href: "/contact",
    },
    {
      title: "Logout",
      icon: (
        <IconLogout className="h-full w-full text-red-700 dark:text-neutral-300" />
      ),
      href: "/logout",
    },
  ];
  return (
    <div className="flex items-center justify-center  w-full  fixed bottom-2">
      <FloatingDock items={links} />
    </div>
  );
};

export default FloatingMenu;
