import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { Press_Start_2P } from 'next/font/google';

const pres = Press_Start_2P({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
})

const links = [
  {id: 1, title: 'Home', path: '/'},
  {id: 2, title: 'Images', path: '/gallery-photos'},
  {id: 3, title: 'Videos', path: '/gallery-videos'},
  {id: 4, title: 'Music', path: '/gallery-music'},
]

function Navbar() {
  const {pathname} = useRouter();

  return (
    <nav className='flex justify-center gap-10'>
      {links.map(({id, title, path}) => (
        <Link 
          key={id} 
          href={path}
          className={classNames(pres.className,'text-2xl font-bold', {
            'text-pink-900': pathname === path,
            'text-white': pathname !== path,
          })}
        >
          {title}
        </Link>
      ))}
    </nav>
  )
}

export default Navbar;
