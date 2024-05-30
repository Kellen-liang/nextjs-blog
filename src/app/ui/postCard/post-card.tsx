import Link from 'next/link';
import Datetime from './date-time';

export interface PostCardProps {
  href: string;
  title: string;
  date: Date;
  description: string
}

export function PostCard(props: PostCardProps) {
  const { href='/', title='hah', date = new Date, description } = props;
  return (
    <div>
      <Link href={href} className='hover:underline hover:decoration-dashed hover:decoration-2 hover:underline-offset-8'>
        {title}
      </Link> 
      <Datetime pubDatetime={date} />
      <p>{description}</p>
    </div>
  );
}
