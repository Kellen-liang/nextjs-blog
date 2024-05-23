export interface HrProps {
  noPadding?: boolean;
}

export function Hr(props: HrProps) {
  const { noPadding = false } = props;
  return (
    <div className={`max-w-3xl mx-auto ${noPadding ? "px-0" : "px-4"}`}>
      <hr className="border-skin-line" />
    </div>
  );
}
