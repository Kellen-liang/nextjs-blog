import { Section } from '@/components/custom/section';
import { PostCard } from '../ui/postCard';
import { LINKS } from '../config';
import { LinkButton } from '@/components/custom/link-button';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Breadcrumbs } from '../ui/breadcrumbs/breadcrumbs';

export default function Posts(){
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
      <Breadcrumbs />
      <Section className='pb-0'>
        <Breadcrumb className='mb-2 capitalize opacity-70 '>
          <BreadcrumbList className='hover:opacity-100 hover:text-white'>
            <BreadcrumbItem >
              <BreadcrumbLink href='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem >
              <BreadcrumbPage>Posts</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
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