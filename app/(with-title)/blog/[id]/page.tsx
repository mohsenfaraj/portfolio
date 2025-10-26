import { getPostList, readPost } from '@/lib/posts';
import { repo } from '@/app/lib/loadBase';
import Comments from '@/app/ui/components/Comments';
export default async function BlogPost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await readPost(id);
  return (
    <article className='mt-20 md:mt-0'>
      <h1 className='text-primary text-4xl'>{post.title}</h1>
      <p className='mt-2'>
        <i className='fa fa-calendar' /> &nbsp;
        {post.date}
      </p>
      <div
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        className='prose dark:prose-invert prose-pre:bg-[#0d1117] prose-a:text-primary mt-5'
      ></div>
      <div className='mt-5 flex items-baseline gap-4'>
        <span>
          <i className='fa fa-tags' /> tags:
        </span>
        <ul className='flex gap-2'>
          {post.tags.map((tag) => {
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
      <Comments repo={repo} type='pathname' />
    </article>
  );
}

export function generateStaticParams() {
  const posts = getPostList();
  return posts;
}
