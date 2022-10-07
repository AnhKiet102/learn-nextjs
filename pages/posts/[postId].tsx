import { useRouter } from 'next/dist/client/router';
import * as React from 'react';

export interface PostDetailPageProps {
}

export default function PostId(props: PostDetailPageProps) {
  const router = useRouter()
  return (
    <div>
      Post detail
      <p>Query: { JSON.stringify(router.query)}</p>
    </div>
  );
}
