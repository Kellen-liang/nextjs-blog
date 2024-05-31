'use client';
import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';

export function Breadcrumbs() {
  const pathName = usePathname();
  const breadcrumbList =  pathName.split('/').slice(1);
  console.log({ breadcrumbList });
  
  const { id } = useParams();
  return(
    <nav className='mx-auto mb-1 mt-8 w-full max-w-3xl px-4'>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
      </ul>

    </nav>
  );
}