import { GetStaticProps, GetStaticPropsContext } from 'next';
import * as React from 'react';
import Link from 'next/link';
export interface PostListProps {
  posts:any[]
}

export default function PostList ({posts}: PostListProps) {
  return (
    <div>
      Post list page
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<PostListProps> = async(
  context: GetStaticPropsContext
) => {
  //Server side
  // build time
  console.log('Static props')
  const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1');
  const data = await response.json()
  console.log(data)
  return {
    props: {
      posts: data.data.map((x: any) => ({ id: x.id, title: x.title })),
    },
  };
}
 