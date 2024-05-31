import Link from 'next/link';
import Datetime from './date-time';

export interface PostCardProps {
  id: string;
  title: string;
  date: Date;
  description: string
}

export function PostCard(props: PostCardProps) {
  const { id, title, date, description } = props;
  return (
    <div className='my-6 leading-8'>
      <Link href={`/post/${id}`} className='text-skin-accent text-xl hover:underline hover:decoration-dashed hover:decoration-2 hover:underline-offset-8'>
        {title}
      </Link> 
      <Datetime createDate={date} />
      <p className='line-clamp-2'>{description}</p>
    </div>
  );
}
