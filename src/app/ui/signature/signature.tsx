import { LinkButton } from '@/components/custom/link-button';
import { Section } from '../../../components/custom/section';
import { SOCIALS } from '@/app/config';
const LinkIconButton = LinkButton.LinkIconButton;

export function Signature() {
  
  const socialsList = SOCIALS.filter((item) => item.active);

  return (
    <Section className='pb-6 pt-8'>
      <h1 className='my-4 inline-block text-3xl font-bold sm:my-8 sm:text-5xl'>Mingalaba</h1>
      <p className='my-2'>
        AstroPaper is a minimal, responsive, accessible and SEO-friendly Astro
        blog theme. This theme follows best practices and provides accessibility
        out of the box. Light and dark mode are supported by default. Moreover,
        additional color schemes can also be configured.
      </p>
      {
        socialsList.length > 0 && (
          <div className='social-wrapper'>
            <div className='social-links'>Social Links:</div>
            {socialsList.map((item, index) => (
              <LinkIconButton 
                key={index} 
                buttonProps={{
                  href: item.href,
                }}
                alt={item.linkTitle}
                src={item.icon}
                width={20}
                height={20}
              />
            ))}
            
          </div>
        )
      }
    </Section>
  );
}
