"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DocsSidebarNav } from "@/components/layout/docs-sidebar-nav";
import type { SidebarNavItem } from "@/types";

interface DocsSidebarProps {
  items: SidebarNavItem[];
  pathname?: string;
}

export function DocsSidebar({ items, pathname }: DocsSidebarProps) {
  return (
    <ScrollArea className="h-full py-6 pr-6 lg:py-8">
      <DocsSidebarNav items={items} pathname={pathname} />
    </ScrollArea>
  );
}
