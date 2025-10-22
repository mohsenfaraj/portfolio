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
        'box-border cursor-pointer rounded border-2 bg-origin-border px-5 py-2 font-bold capitalize',
        type === 'gradient' &&
          'border-transparent bg-gradient-to-r from-primary to-secondary text-white',
        type === 'outline' &&
          'border-gray-400 text-gray-400 transition duration-200 hover:border-primary hover:text-primary dark:bg-zinc-800',
        type !== 'outline' && type !== 'gradient' && 'bg-primary text-white'
      )}
    >
      {children}
    </div>
  );
};
export default Button;
