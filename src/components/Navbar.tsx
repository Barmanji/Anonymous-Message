
'use client';

import React from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { Button } from './ui/button';
import { User } from 'next-auth';

function Navbar() {
  const { data: session } = useSession();
  const user: User = session?.user;

  return (
    <header className="px-4 h-14 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg border-b border-border z-50">
      <nav className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
        {/* Left side: Anonymous Message */}
        <a href="#" className="text-xl font-bold">
          Anonymous Message
        </a>

        {/* Right side: Login/Logout */}
        <div className="flex items-center">
          {session ? (
            <>
              <span className="mr-4">
                Welcome, {user.username || user.email}
              </span>
              <Button
                onClick={() => signOut()}
                className="w-full md:w-auto bg-slate-100 text-black"
                variant="outline"
              >
                Logout
              </Button>
            </>
          ) : (
            <Link href="/sign-in">
              <Button
                className="w-full md:w-auto bg-slate-100 text-black"
                variant="outline"
              >
                Login
              </Button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
