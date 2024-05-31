import { Signature } from '@/app/ui/signature';
import { Section } from '@/components/custom/section';
import { PostCard } from './ui/postCard';

export default function Home() {
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
      description: 'AstroPaper v4: ensuring a smoother and more feature-rich blogging experience.',
      createDate: new Date(),
    },
  ];
  return (
    <main id='container'>
      <Signature />
      <Section>
        <h2>Posts</h2>
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
    </main>
  );
}
