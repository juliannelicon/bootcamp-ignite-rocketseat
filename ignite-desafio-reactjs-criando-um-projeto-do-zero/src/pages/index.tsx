import { GetStaticPaths, GetStaticProps } from 'next';

import Link from 'next/link';

import { FiCalendar, FiUser } from 'react-icons/fi';

import Prismic from '@prismicio/client';

import { RichText } from 'prismic-dom';

import { format } from 'date-fns';

import ptBR from 'date-fns/locale/pt-BR';

import { useEffect, useState } from 'react';
import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';

import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home({ postsPagination }: HomeProps): JSX.Element {
  const [posts, setPosts] = useState<Post[]>([]);
  const [nextPage, setNexPage] = useState(null);

  useEffect(() => {
    if (postsPagination) {
      setPosts(postsPagination.results);
      setNexPage(postsPagination.next_page);
    }
  }, [postsPagination]);

  function handleLoadMorePosts(): void {
    fetch(postsPagination.next_page)
      .then(response => response.json())
      .then(data => {
        setNexPage(data.next_page);
        data.results.map(post =>
          setPosts([
            ...posts,
            {
              ...post,
              data: {
                title:
                  typeof post.data.title === 'string'
                    ? post.data.title
                    : RichText.asText(post.data.title),
                subtitle:
                  typeof post.data.subtitle === 'string'
                    ? post.data.subtitle
                    : RichText.asText(post.data.subtitle),
                author:
                  typeof post.data.author === 'string'
                    ? post.data.author
                    : RichText.asText(post.data.author),
              },
            },
          ])
        );
      });
  }

  return (
    <div className={commonStyles.container}>
      <main className={styles.main}>
        <img src="/Logo.svg" alt="logo" />
        {posts.map(post => (
          <Link key={post.uid} href={`post/${post.uid}`}>
            <a>
              <h1>{post.data.title}</h1>
              <p>{post.data.subtitle}</p>
              <div>
                <time>
                  <FiCalendar />
                  {format(
                    new Date(post.first_publication_date),
                    'dd MMM yyyy',
                    {
                      locale: ptBR,
                    }
                  )}
                </time>
                <span>
                  <FiUser />
                  {post.data.author}
                </span>
              </div>
            </a>
          </Link>
        ))}
        {nextPage && (
          <button type="button" onClick={handleLoadMorePosts}>
            Carregar mais posts
          </button>
        )}
      </main>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at('document.type', 'post')],
    {
      fetch: ['post.title', 'post.subtitle', 'post.author'],
      pageSize: 2,
    }
  );

  const results = response.results.map(post => {
    return {
      ...post,
      data: {
        title:
          typeof post.data.title === 'string'
            ? post.data.title
            : RichText.asText(post.data.title),
        subtitle:
          typeof post.data.subtitle === 'string'
            ? post.data.subtitle
            : RichText.asText(post.data.subtitle),
        author:
          typeof post.data.author === 'string'
            ? post.data.author
            : RichText.asText(post.data.author),
      },
    };
  });
  const { next_page } = response;

  const postsPagination = { next_page, results };

  return {
    props: { postsPagination },
    revalidate: false,
  };
};
