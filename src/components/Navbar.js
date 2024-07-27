import Link from "next/link";
import { useRouter } from "next/router";

const links = [
  {id: 1, title: 'Home', path: '/'},
  {id: 2, title: 'Images', path: '/gallery-photos'},
  {id: 3, title: 'Videos', path: '/gallery-videos'},
  {id: 4, title: 'Music', path: '/gallery-music'},
]

function Navbar() {
  const {pathname} = useRouter();

  return (
    <nav className='flex gap-5 m-4 bg-amber-300'>
      {links.map(({id, title, path}) => (
        <Link 
          key={id} 
          href={path}
          className={pathname === path ? ('Вказати стиль'): null}
        >
          {title}
        </Link>
      ))}
    </nav>
  )
}

export default Navbar;
