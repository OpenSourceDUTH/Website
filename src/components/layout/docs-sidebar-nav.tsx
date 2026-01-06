import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import type { MenuItem, SidebarNavItem } from "@/types";

interface DocsSidebarNavProps {
  items: SidebarNavItem[];
  pathname?: string;
}

// Type guard to check if item is a SidebarNavItem with nested items
function isSidebarNavItem(item: MenuItem | SidebarNavItem): item is SidebarNavItem {
  return 'items' in item && Array.isArray(item.items);
}

// Recursive component for rendering nested items
function SidebarNavItems({
  items,
  pathname,
  depth = 0,
}: {
  items: (MenuItem | SidebarNavItem)[];
  pathname?: string;
  depth?: number;
}) {
  // Separate items into sub-folders (with nested items) and links (leaf items)
  const subFolders = items.filter(isSidebarNavItem);
  const links = items.filter((item): item is MenuItem => !isSidebarNavItem(item));

  // Get default open sub-folders
  const defaultOpenSubFolders = subFolders
    .filter((item) => item.defaultOpen !== false) // default to closed for sub-folders
    .map((item) => item.title);

  return (
    <div className={cn("flex flex-col border-2 border-dotted rounded-md px-0", depth > 0 && "mt-1.5")}>
      {/* Render link items first */}
      {links.map((item) => (
        <a
          key={item.href}
          href={item.disabled ? undefined : item.href}
          target={item.target}
          className={cn(
            "flex w-full items-center rounded-md px-2 py-1.5 text-sm transition-colors",
            item.disabled
              ? "cursor-not-allowed text-muted-foreground opacity-60"
              : "text-muted-foreground hover:bg-accent hover:text-foreground",
            pathname === item.href && "bg-accent font-medium text-foreground"
          )}
        >
          {item.title}
          {item.badge && (
            <span className="ml-2 rounded-md bg-primary/10 px-1.5 py-0.5 text-xs text-primary">
              {item.badge}
            </span>
          )}
        </a>
      ))}

      {/* Render sub-folders with accordion */}
      {subFolders.length > 0 && (
        <Accordion
          type="multiple"
          defaultValue={defaultOpenSubFolders}
          className="w-full"
        >
          {subFolders.map((subFolder) => (
            <AccordionItem
              key={subFolder.title}
              value={subFolder.title}
              className="overflow-hidden rounded-md border px-3 pb-1"
            >
              <AccordionTrigger
                className={cn(
                  "py-2 text-sm font-medium hover:no-underline px-2",
                  "text-muted-foreground hover:text-foreground",
                  "[&>svg]:size-3.5"
                )}
              >
                {subFolder.title}
              </AccordionTrigger>
              <AccordionContent className="pb-2 pt-0 px-2 py-0">
                <SidebarNavItems
                  items={subFolder.items!}
                  pathname={pathname}
                  depth={depth + 1}
                />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </div>
  );
}

export function DocsSidebarNav({ items, pathname }: DocsSidebarNavProps) {
  // Get current pathname from window if not provided
  const currentPath = pathname || (typeof window !== "undefined" ? window.location.pathname : "");

  // Get default open sections (top-level items default to open)
  const defaultOpenSections = items
    .filter((item) => item.items && item.defaultOpen !== false)
    .map((item) => item.title);

  return (
    <nav className="w-full">
      <Accordion
        type="multiple"
        defaultValue={defaultOpenSections}
        className="w-full"
      >
        {items.map((section) => {
          // If section has items (is a category)
          if (section.items) {
            return (
              <AccordionItem
                key={section.title}
                value={section.title}
                className="overflow-hidden  px-4 pb-2 shadow-sm"
              >
                <AccordionTrigger
                  className={cn(
                    "py-3 text-sm font-semibold hover:no-underline",
                    "[&>svg]:size-4"
                  )}
                >
                  {section.title}
                </AccordionTrigger>
                <AccordionContent className="pb-3 pt-0">
                  <SidebarNavItems
                    items={section.items}
                    pathname={currentPath}
                    depth={0}
                  />
                </AccordionContent>
              </AccordionItem>
            );
          }

          // If section is a direct link (no nested items)
          return (
            <a
              key={section.href}
              href={section.disabled ? undefined : section.href}
              target={section.target}
              className={cn(
                "flex w-full items-center rounded-lg border px-4 py-3 text-sm font-semibold shadow-sm transition-colors",
                section.disabled
                  ? "cursor-not-allowed text-muted-foreground opacity-60"
                  : "text-foreground hover:bg-accent hover:text-foreground/80",
                currentPath === section.href && "bg-accent text-primary"
              )}
            >
              {section.title}
            </a>
          );
        })}
      </Accordion>
    </nav>
  );
}
