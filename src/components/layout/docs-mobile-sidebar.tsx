"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DocsSidebarNav } from "@/components/layout/docs-sidebar-nav";
import type { SidebarNavItem } from "@/types";

interface DocsMobileSidebarProps {
  items: SidebarNavItem[];
}

export function DocsMobileSidebar({ items }: DocsMobileSidebarProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="default"
          rounded="full"
          className="fixed bottom-4 right-4 z-40 size-12 p-0 shadow-lg md:hidden"
          aria-label="Open documentation sidebar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
            <path d="M8 7h6" />
            <path d="M8 11h8" />
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72 pr-0">
        <div className="flex items-center pb-4">
          <span className="font-semibold">Documentation</span>
        </div>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
          <div className="pr-4">
            <DocsSidebarNav items={items} />
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
