import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/layout'

import users from "@/data/users.json";
import Card from '@/components/card';
import useJsonStore from '@/stores/useJson';

const inter = Inter({ subsets: ['latin'] })

const Users = () => {
  const store = useJsonStore();

  if (!Object.keys(store.user).length) return (
    <Layout active="/users">
      <div className='grid grid-cols-4 gap-6'>
        Users
      </div>
    </Layout>
  )

  return (
    <Layout active="/users">
      <div className='grid grid-cols-4 gap-6'>
        {Object.keys(store.user).length ? users.map((user: any) => (
          <Card key={user.id} {...user} active={user.id === store.user.id ? true : false}/>
        )) : 'Users'}
      </div>
    </Layout>
  )
}

export default Users;