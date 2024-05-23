import { PropsWithChildren } from "react";
import clsx from "clsx";
import { Hr } from "../hr";

export interface SectionProps
  extends PropsWithChildren,
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  hrNoPadding?: boolean;
}

export function Section(props: SectionProps) {
  const { children, className, hrNoPadding } = props;
  return (
    <>
      <section className={clsx("", className)}>{children}</section>
      <Hr noPadding={hrNoPadding} />
    </>
  );
}
