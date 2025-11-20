import { getPostList, readPost } from '@/lib/posts';
import { repo } from '@/app/lib/loadBase';
import Comments from '@/app/ui/components/Comments';
import { Calendar, Tags } from 'lucide-react';
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
      <p className='mt-2 flex gap-2'>
        <Calendar />
        {post.date}
      </p>
      <div
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        className='prose dark:prose-invert prose-pre:bg-[#0d1117] prose-a:text-primary mt-5'
      ></div>
      <ul className='mt-4 flex gap-2'>
        <span className='flex gap-2 rounded border border-zinc-500 bg-zinc-100 p-1 text-sm text-zinc-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-400'>
          <Tags size={18} /> tags:
        </span>
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
      <Comments repo={repo} type='pathname' />
    </article>
  );
}

export function generateStaticParams() {
  const posts = getPostList();
  return posts;
}
