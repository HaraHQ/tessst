import Image from "next/image"
import React from "react"

const Card = (props: any) => {
  const [loading, setLoading] = React.useState(true);
  const [token, setToken] = React.useState('');

  React.useEffect(() => {
    (async () => {
      const resp: any = await fetch('/api/get-token', {
        method: 'post',
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
          id: props.id
        })
      })
      const json = await resp.json();
  
      if (resp.ok) {
        console.log('testtttt')
        setTimeout(() => {
          setToken(json.token)
          setLoading(false);
        }, 4000)
      }
    })()
  }, [props.id])
  return (
    <div className='border-2 border-green-700 p-4 rounded-lg'>
      <div className='relative w-full'>
        <Image src={props.avatar} alt='' width={500} height={500} />
      </div>
      <div className='text-green-700 text-xl font-semibold'>{props.name}</div>
      {props.active ? (
        <div className='flex items-center space-x-1'>
          <div className='w-2 h-2 bg-green-700 rounded-full animate-pulse'></div>
          <div className='text-green-700 animate-pulse text-sm'>Online</div>
        </div>
      ) : (
        <div className='flex items-center space-x-1'>
          <div className='w-2 h-2 bg-gray-700 rounded-full'></div>
          <div className='text-gray-700 text-sm'>Offline</div>
        </div>
      )}
      {loading ? <div className="animate-pulse">loading...</div> : <div className="text-xs">{token}</div>}
    </div>
  )
}

export default Card