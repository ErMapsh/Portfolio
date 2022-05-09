import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Navbar() {
  const [activeItem, setactiveItem] = useState<string>("");
  const router = useRouter();
  useEffect(() => {
    if (router.pathname === "/") {
      setactiveItem("About")
    } else if (router.pathname === "/Projects") {
      setactiveItem("Projects")
    } else if (router.pathname === "/Resume") {
      setactiveItem("Resume")
    }
    // eslint-disable-next-line
  }, [])

  return (
    <div className='flex justify-between px-5 py-4 my-3'>
      {/* here we show which is that active btn */}
      <span className='text-xl font-bold border-b-4 md:text-2xl border-green text-green'>{activeItem}</span>

      {/* one of the active thing will ne not seen in this */}
      <div className='space-x-5 text-xl text-red-600'>
        {
          // when activeItem is same, then dont navigate
          activeItem !== 'About' && (
            <Link href="/">
              <a><span onClick={() => { setactiveItem("About") }} className="hover:text-green">About</span></a>
            </Link>
          )
        }
        {/* {
          activeItem !== 'Projects' && (
            <Link href="/Projects">
              <a><span onClick={() => { setactiveItem("Projects") }} className="hover:text-green">Projects</span></a>
            </Link>
          )
        } */}
        {
          activeItem !== 'Resume' && (
            <Link href="/Resume">
              <a><span onClick={() => { setactiveItem("Resume") }} className="hover:text-green">Resume</span></a>
            </Link>
          )
        }
      </div>
    </div>
  )
}

export default Navbar