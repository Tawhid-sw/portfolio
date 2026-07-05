import { Hexagon, Menu, Send } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { title: "Home", href: "/" },
  { title: "Services", href: "/services" },
  { title: "Portfolio", href: "/portfolio" },
  { title: "About Us", href: "/about" },
  { title: "Blog", href: "/blog" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        {/* 1. Brand Logo (Left) */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Hexagon className="h-5 w-5 fill-current" />
          </div>
          <span className="text-lg font-bold tracking-tight">BrandCorp</span>
        </div>

        {/* 2. Navigations (Middle - Hidden on Mobile) */}
        <div className="hidden md:flex flex-1 justify-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {/* Replace <a> with <Link> if using Next.js */}
                  <NavigationMenuLink
                    href={item.href}
                    className={navigationMenuTriggerStyle()}
                  >
                    {item.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* 3. Contact Button (Right - Hidden on Mobile) */}
        <div className="hidden md:flex items-center">
          <Button className="shadow-sm">
            <Send className="mr-2 h-4 w-4" />
            Contact Me
          </Button>
        </div>

        {/* Mobile Menu (Sheet) */}
        <div className="md:hidden flex items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-4">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2 text-left">
                  <Hexagon className="h-5 w-5" />
                  BrandCorp
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 mt-8">
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
                <div className="flex flex-col gap-4 mt-auto">
                  <Button className="w-full shadow-sm">
                    <Send className="mr-2 h-4 w-4" />
                    Contact Me
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
