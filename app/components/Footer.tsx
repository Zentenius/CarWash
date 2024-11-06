import { Instagram, Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type Props = {}

function Footer({}: Props) {
  return (
    <footer id='footer' className="footer text-white bg-red-500 p-10 mt-10">
  <aside>
    <Image
    src={'/logo.png'}
    width={50}
    height={50}
    alt='logo'
    className='rounded-md'
    />
    <div className="flex flex-col gap-2">
  <div className="flex items-center gap-2">
    <Mail className='h-5 w-5' />
    <span>grdnotis88@gmail.com</span>
  </div>
  <div className="flex items-center gap-2">
    <Phone className='h-5 w-5'/>
    <span>+1 (561) 537-1549</span>
  </div>
</div>
  </aside>
  <nav>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4">
      <a href='https://www.instagram.com/coolrunningsauto/?hl=en'>
        <Instagram className='h-5 w-5'/>
      </a>
    </div>
  </nav>
</footer>
  )
}

export default Footer