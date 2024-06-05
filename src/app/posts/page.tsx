import { Section } from '@/components/custom/section';
import { PostCard } from '../ui/postCard';
import { LINKS } from '../config';
import { LinkButton } from '@/components/custom/link-button';
import { Breadcrumbs } from './breadcrumbs';

export interface PostsProps {
 
}

export default function Posts({
  searchParams, 
}: {
  searchParams?: {
    page?: number | string;
  };
}){

  const posts = [
    {
      id: '123',
      title: 'How to configure AstroPaper theme',
      description: 'How you can make AstroPaper theme absolutely yours.',
      createDate: new Date(),
    },
    {
      id: '133',
      title: 'Adding new posts in AstroPaper theme',
      description: 'AstroPaper v4: ensuring a smoother and more feature-rich blogging experience.AstroPaper v4: ensuring a smoother and more feature-rich blogging experience.AstroPaper v4: ensuring a smoother and more feature-rich blogging experience.AstroPaper v4: ensuring a smoother and more feature-rich blogging experience.AstroPaper v4: ensuring a smoother and more feature-rich blogging experience.',
      createDate: new Date(),
    },
  ];
  return (
    <main id='container' className='flex flex-col'>
      <Section className='pb-0'>
        <Breadcrumbs currentPage={Number(searchParams?.page || 1)} />
        <h2>Posts</h2>
        <p>All the articles I&rsquo;ve posted</p>
        {
          posts && posts.map((post) => (
            <PostCard 
              key={post.id}
              id={post.id}
              title={post.title}
              description={post.description}
              date={post.createDate}
            />
          ))
        }
        
      </Section>
      <Section noHr className='px-0 py-4 flex justify-between'>
        <div>All posts.</div>
        <div className='space-x-4'>
          {
            LINKS.map((item) => (
              <LinkButton key={item.name} href={item.url}>
                <item.icon />
              </LinkButton>
            ))
          }
        </div>
      </Section>
    </main>
    
  );
}