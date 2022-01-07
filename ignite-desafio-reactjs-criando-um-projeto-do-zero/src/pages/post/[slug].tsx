import { GetStaticPaths, GetStaticProps } from 'next';

import Prismic from '@prismicio/client';

import { format } from 'date-fns';

import { ptBR } from 'date-fns/locale';

import { useRouter } from 'next/router';

import { RichText } from 'prismic-dom';

import { FiCalendar, FiUser, FiClock } from 'react-icons/fi';

import Header from '../../components/Header';

import { getPrismicClient } from '../../services/prismic';

// import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps): JSX.Element {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <Header />
      <div className={styles.banner}>
        <img src="/Banner.svg" alt="" />
      </div>
      <main className={styles.container}>
        <div className={styles.post}>
          <h1>{post.data.title}</h1>
          <div className={styles.info}>
            <time>
              <FiCalendar />
              {format(new Date(post.first_publication_date), 'dd MMM yyyy', {
                locale: ptBR,
              })}
            </time>
            <span>
              <FiUser />
              {post.data.author}
            </span>
            <span>
              <FiClock />4 min
            </span>
          </div>
          <div className={styles.content}>
            {post.data.content.map(content => {
              return (
                <div key={content.heading}>
                  <span dangerouslySetInnerHTML={{ __html: content.heading }} />
                  {content.body.map(body => (
                    <div
                      key={body.text}
                      dangerouslySetInnerHTML={{ __html: body.text }}
                    />
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const posts = await prismic.query(
    [Prismic.predicates.at('document.type', 'post')],
    {}
  );
  const params = posts.results.map(result => {
    return {
      params: {
        slug: result.uid,
      },
    };
  });

  return {
    paths: params,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const { slug } = context.params;

  const prismic = getPrismicClient();
  const response = await prismic.getByUID('post', String(slug), {});

  const results = {
    ...response,
    data: {
      title:
        typeof response.data.title === 'string'
          ? response.data.title
          : RichText.asText(response.data.title),
      subtitle:
        typeof response.data.subtitle === 'string'
          ? response.data.subtitle
          : RichText.asText(response.data.subtitle),
      author:
        typeof response.data.author === 'string'
          ? response.data.author
          : RichText.asText(response.data.author),
      banner: {
        url: response.data.banner.url,
      },
      content: response.data.content.map(content => {
        return {
          heading:
            typeof content.heading === 'string'
              ? content.heading
              : RichText.asHtml(content.heading),
          body: content.body.map(body => {
            return {
              ...body,
              text:
                typeof body.text === 'string'
                  ? body.text
                  : RichText.asHtml(body.text),
            };
          }),
        };
      }),
    },
  };
  return {
    props: { post: results },
    revalidate: 60 * 60,
  };
};
