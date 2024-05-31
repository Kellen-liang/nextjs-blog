import { LINKS } from '@/app/config';
import { Section } from '../../../components/custom/section';
import { LinkButton } from '@/components/custom/link-button';

export function Signature() {
  
  return (
    <Section className='pb-6 pt-8'>
      <h1 className='my-4'>Mingalaba</h1>
      <p className='my-2'>
        AstroPaper is a minimal, responsive, accessible and SEO-friendly Astro
        blog theme. This theme follows best practices and provides accessibility
        out of the box. Light and dark mode are supported by default. Moreover,
        additional color schemes can also be configured.
      </p>
     
      <div className='flex py-4'>
        <div className='mr-2'>Social Links:</div>
        <div className='space-x-2'>
          {
            LINKS.map((item) => (
              <LinkButton key={item.name} href={item.url}>
                <item.icon />
              </LinkButton>
            ))
          }
        </div>
      </div>
      
    </Section>
  );
}
