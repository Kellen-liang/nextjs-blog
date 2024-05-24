import type { PropsWithChildren } from 'react';
import clsx from 'clsx';
import { Hr } from '../hr';

export interface SectionProps
  extends PropsWithChildren,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  noHr?: boolean;
  hrNoPadding?: boolean;
}

export function Section(props: SectionProps) {
  const { children, className, noHr, hrNoPadding } = props;
  return (
    <>
      <section className={clsx('py-10 w-full px-4', className)}>{children}</section>
      { !noHr && <Hr noPadding={hrNoPadding} /> }
    </>
  );
}
