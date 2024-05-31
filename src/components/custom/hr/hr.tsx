import { clsx } from 'clsx';
export interface HrProps {
  className?: string
  hrClassName?: string
}

export function Hr(props: HrProps) {
  const { className, hrClassName } = props;
  return (
    <div className={className}>
      <hr className={clsx('border-skin-line', hrClassName)} />
    </div>
  );
}
