import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'data', 'posts');

export type grayMatterData = {
  title: string;
  date: string;
  summary: string;
  tags: string[];
};

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    return {
      id,
      ...(matterResult.data as grayMatterData),
    };
  });
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostList() {
  const fileNames = fs.readdirSync(postsDirectory);
  const slugs = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    return { id: id };
  });

  return slugs;
}

export async function readPost(id: string) {
  const fullpath = path.join(postsDirectory, id + '.md');
  const fileContent = fs.readFileSync(fullpath, 'utf-8');
  const matterResult = matter(fileContent);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  return {
    id,
    contentHtml,
    ...(matterResult.data as grayMatterData),
  };
}
