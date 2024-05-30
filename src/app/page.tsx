import { Signature } from '@/app/ui/signature';
import { Section } from '@/components/custom/section';
import { PostCard } from './ui/postCard';

export default function Home() {
  return (
    <main id='container'>
      <Signature />
      <Section>
        <h2>Posts</h2>
        <PostCard />
      </Section>
    </main>
  );
}
