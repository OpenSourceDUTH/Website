import * as React from "react";

import { cn } from "@/lib/utils";
import { Icons } from "@/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Badge } from "@/components/ui/badge";
import { navMenuConfig } from "@/config/nav-menu";
import { navMenuConfigEl } from "@/config/nav-menu.el";
import type { MenuItem } from "@/types";

interface Props {
  isGreek?: boolean;
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { 
    title: string; 
    image?: string;
    description?: string;
  }
>(({ className, title, children, image, description, ...props }, ref) => {
  return (
    <li>
      <a
        ref={ref}
        className={cn(
          "group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none group-hover:underline">
          {title}
        </div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {description}
        </p>
      </a>
    </li>
  );
});
ListItem.displayName = "ListItem";

export function LocalizedNavigationMenu({ isGreek = false }: Props) {
  const config = isGreek ? navMenuConfigEl : navMenuConfig;
  const links = config.links;
  const pages = config.pagesNav[0];

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* Direct links */}
        {links?.map((link) => (
          <NavigationMenuItem key={link.href}>
            <a
              href={link.href}
              className={cn(navigationMenuTriggerStyle(), "h-9")}
            >
              {link.title}
              {link.badge && (
                <Badge
                  radius="sm"
                  className="ml-2 px-1.5 py-0.5 text-xs font-medium"
                  variant="secondary"
                >
                  {link.badge}
                </Badge>
              )}
            </a>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
