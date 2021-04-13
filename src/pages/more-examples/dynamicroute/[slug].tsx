import Link from 'next/link'
import getT from 'next-translate/getT'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'

export default function DynamicRoute({ title = '', posts = [] }) {
  const { query } = useRouter()
  const { t, lang } = useTranslation()

  console.log({ query })

  const router = useRouter()
  if (router.isFallback) {
    return <div>"...Loading"</div>
  }

  return (
    <>
      <h1>{title}</h1>
      <h2>{t`more-examples:dynamic-route`}</h2>
      <h3>
        {query.slug} - {lang}
      </h3>
      <h3 style={{ color: 'red' }}>
        {t(`more-examples:posts`, { count: posts.length })}
      </h3>
      <Link href="/">
        <a>{t`more-examples:go-to-home`}</a>
      </Link>
    </>
  )
}

export function getStaticPaths({ locales }: any) {
  return {
    paths: locales.map((locale: string) => ({
      locale,
      params: { slug: 'example' },
    })),
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const t = await getT(locale, 'common')

  const posts = [
    { title: 'Post Title 1', value: 'Some Content ' },
    { title: 'Post Title 2', value: 'some more content' },
    { title: 'Post Title 3', value: 'This is ok content' },
  ]
  return { revalidate: 1, props: { title: t('title'), posts } }
}
