import { MainNav } from "../components/layout/main-nav";
import { Search } from "../components/layout/search";
import { UserNav } from "../components/layout/user-nav";
import Image from "next/image"




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <main>
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <div>
              <Image src="/logo_1.svg" width={64} height={64} alt="not" />
            </div>
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <UserNav />
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6">
        {children}
        </div>
      </div>
        </main>
  );
}
