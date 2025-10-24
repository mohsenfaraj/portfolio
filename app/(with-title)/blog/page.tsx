import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';

type Props = {};

const Blog = (props: Props) => {
  const data = getSortedPostsData();
  return (
    <div>
      <h1 className='text-primary text-center text-4xl font-bold'>Blog</h1>
      <section>
        {data.map((item) => {
          return (
            <div
              className='mt-5 border-2 border-neutral-50 p-5 shadow-xl'
              key={item.id}
            >
              <h2 className='text-2xl'>
                <Link href={'/blog/' + item.id}>{item.title}</Link>
              </h2>
              <p className='mt-2'>
                <i className='fa fa-calendar' /> &nbsp;
                {item.date}
              </p>
              <p className='mt-2'>{item.summary}</p>
              <div className='flex items-baseline gap-4'>
                <span>
                  <i className='fa fa-tags' /> tags:
                </span>
                <ul className='mt-3 flex gap-2'>
                  {item.tags.map((tag) => {
                    return (
                      <li
                        className='rounded-lg bg-neutral-400 p-1 text-sm text-white'
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
