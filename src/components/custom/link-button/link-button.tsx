import clsx from 'clsx';
import type { ImageProps  } from 'next/image';
import Image from 'next/image';

export interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
}

export interface LinkIconButtonProps extends ImageProps {
  buttonProps: LinkButtonProps
}

function AnchorButton(props: LinkButtonProps) {
  const { children, className } = props;
  return (
    <>
      <a className={clsx('hover:cursor-pointer origin-center hover:rotate-6', className)}>{children}</a>
    </>
  );
}

function LinkIconButton(props: LinkIconButtonProps) {
  const { buttonProps, ...rest } = props;
  
  return (
    <AnchorButton {...buttonProps} >
      <Image {...rest} />
    </AnchorButton>
  );
}

export const LinkButton = Object.assign(AnchorButton, {
  LinkIconButton,
});