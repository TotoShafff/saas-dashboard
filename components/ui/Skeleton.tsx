type Props = {
  className?: string;
  style?: React.CSSProperties;
};

export function Skeleton({ className = "", style }: Props) {
  return (
    <div
      className={`animate-pulse rounded-md bg-gray-200 dark:bg-gray-800 ${className}`}
      style={style}
    />
  );
}
