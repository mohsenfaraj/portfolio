import { getPostList, grayMatterData, readPost } from '@/lib/posts';

export default async function BlogPost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await readPost(id);
  return (
    <article>
      <h1 className='text-4xl'>{post.title}</h1>
      <p className='mt-2'>
        <i className='fa fa-calendar' /> &nbsp;
        {post.date}
      </p>
      <div
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        className='prose mt-5'
      ></div>
      <div className='mt-5 flex items-baseline gap-4'>
        <span>
          <i className='fa fa-tags' /> tags:
        </span>
        <ul className='flex gap-2'>
          {post.tags.map((tag) => {
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
    </article>
  );
}

export function generateStaticParams() {
  const posts = getPostList();
  return posts;
}
