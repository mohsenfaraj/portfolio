import clsx from 'clsx';
type Props = {
  type?: 'gradient' | 'outline';
  children: string;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
};
const Button = ({ children, type, onClick }: Props) => {
  return (
    <div
      onClick={onClick || undefined}
      className={clsx(
        'cursor-pointer rounded px-5 py-2 font-bold capitalize',
        type === 'gradient' &&
          'bg-gradient-to-r from-primary to-secondary text-white',
        type === 'outline' &&
          'border-2 border-gray-400 text-gray-400 transition duration-200 hover:border-primary hover:text-primary dark:bg-zinc-800',
        type !== 'outline' && type !== 'gradient' && 'bg-primary text-white'
      )}
    >
      {children}
    </div>
  );
};
export default Button;
