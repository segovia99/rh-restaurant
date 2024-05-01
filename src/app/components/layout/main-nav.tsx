'use client'

import Link from "next/link"

import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation";

const adminNav = [
  {
    name: "Dashboard",
    href: "/rhu",
  },
  {
    name: "Empleados",
    href: "/rhu/employees",
  },
  {
    name: "Periodos",
    href: "/rhu/periods",
  },
  {
    name: "Planillas",
    href: "/rhu/spreadsheets",
  },
  {
    name: "Configuracion",
    href: "/rhu/settings",
  },
]

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {
        adminNav.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`text-sm font-medium ${pathname === item.href ? 'text-primary':'text-muted-foreground'} transition-colors hover:text-primary`}
          >
            {item.name}
          </Link>
        ))
      }
    </nav>
  )
}