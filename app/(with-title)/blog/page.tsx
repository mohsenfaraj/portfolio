import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';

type Props = {};

const Blog = (props: Props) => {
  const data = getSortedPostsData();
  return (
    <div>
      <h1 className='text-primary text-center text-4xl font-bold'>[Blog]</h1>
      <section>
        {data.map((item) => {
          return (
            <div
              className='mt-5 rounded-xl p-7 shadow-xl dark:bg-zinc-900'
              key={item.id}
            >
              <h2 className='text-primary text-2xl'>
                <Link href={'/blog/' + item.id}>{item.title}</Link>
              </h2>
              <p className='mt-2 text-sm text-zinc-500'>
                <i className='fa fa-calendar' /> &nbsp;
                {item.date}
              </p>
              <p className='mt-3'>{item.summary}</p>
              <div className='flex items-baseline gap-4'>
                <span className='rounded border border-zinc-500 bg-zinc-100 p-1 text-sm text-zinc-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-400'>
                  <i className='fa fa-tags' /> tags:
                </span>
                <ul className='mt-5 flex gap-2'>
                  {item.tags.map((tag) => {
                    return (
                      <li
                        className='rounded border border-zinc-500 bg-zinc-100 p-1 text-sm text-zinc-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-400'
                        key={tag}
                      >
                        {tag}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Blog;
