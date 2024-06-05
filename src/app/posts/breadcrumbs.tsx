'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export interface BreadcrumbsProps {
  currentPage: number | string
}

export function Breadcrumbs(props: BreadcrumbsProps) {
  const { currentPage } = props;
  const pathName = usePathname();
  const breadcrumbList =  pathName.split('/').slice(1);
  return(
    <nav className='mx-auto mb-1 w-full max-w-3xl flex space-x-3 opacity-80'>
      <Link href='/'>Home</Link>
      {
        breadcrumbList.map((breadcrumb, index, arr) => (
          <>
            <span>&raquo;</span>
            {
              index < arr.length - 1
                ? <Link key={index} href={`/${breadcrumb}`}>{breadcrumb}</Link>
                : <span>{`${breadcrumb}（Page ${currentPage}）`}</span>
            }
            
          </>
        ))
      }
    </nav>
  );
}