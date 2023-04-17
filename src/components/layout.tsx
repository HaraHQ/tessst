import React from "react";

import useJsonStore from "@/stores/useJson";
import Link from "next/link";

import json from "@/data/users.json";

interface Nav {
  url: string
  label: string
}
const Layout = (props: any) => {
  const store = useJsonStore();

  const nav: Nav[] = [
    { url: '/', label: 'HOME' },
    { url: '/users', label: 'USERS' },
  ];

  const handleConnect = () => {
    const whichUser = Math.floor(Math.random() * json.length) + 1;
    const user = json[whichUser];

    store.setUser(user);
  }

  return (
    <div className="h-screen w-screen bg-green-700 text-white">
      <div className='bg-green-700 text-white flex items-center justify-between container mx-auto py-8'>
        <div className="text-4xl">
          SSS
        </div>
        <div className='flex items-center space-x-4'>
          {nav.map((n: Nav) => (
            <Link
              key={n.url}
              href={n.url}
              className={`border-2 rounded-md shadow-md text-white px-4 py-6 ${props.active === n.url ? 'border-yellow-500' : 'border-white'}`}>
              {n.label}
            </Link>
          ))}
        </div>
        {store.user.id ? (
          <div onClick={store.removeUser} className='border-2 border-yellow-500 rounded-md shadow-md text-white px-4 py-6 cursor-pointer'>
            {store.user.name}
          </div>
        ) : (
          <div onClick={handleConnect} className='border-2 border-white rounded-md shadow-md text-white px-4 py-6 cursor-pointer'>
            Connect Wallet
          </div>
        )}
      </div>

      <div className='p-2 bg-white text-black min-h-screen'>
        {props.children}
      </div>
    </div>
  )
}

export default Layout;