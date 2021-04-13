import Link from "next/link";
import getT from "next-translate/getT";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { GetStaticPathsContext, GetStaticProps } from "next";
import Participants from "../../components/participants";

export default function Podcast({
  title = "",
  participants,
}: {
  title: string;
  participants: { guests: Person[]; hosts: Person[] };
}) {
  const { query } = useRouter();
  const { t, lang } = useTranslation();

  console.log({ query });

  const router = useRouter();
  if (router.isFallback) {
    return <div>"...Loading"</div>;
  }

  const { guests, hosts } = participants;

  return (
    <>
      <h1>{title}</h1>
      <h3>
        {query.slug} - {lang}
      </h3>
      <div
        style={{ backgroundColor: "Azure", padding: "2rem", margin: "1rem 0" }}
      >
        <p style={{ color: "red" }}>This should be singular</p>
        <Participants
          heading={t(`podcast:guests`, { count: guests.length })}
          participants={guests}
        />
      </div>

      <div
        style={{
          backgroundColor: "Cornsilk",
          padding: "1rem 3rem",
          margin: "1rem 0",
        }}
      >
        <p style={{ color: "red" }}>This should be plural</p>
        <Participants
          heading={t(`podcast:hosts`, { count: hosts.length })}
          participants={hosts}
        />
      </div>

      <Link href="/">
        <a>Go home</a>
      </Link>
    </>
  );
}

export function getStaticPaths({ locales = [] }: GetStaticPathsContext) {
  const episodes = ["episode1", "episode2", "episode3"];

  const paths = locales.reduce((result: Path[] = [], currentLoc: string) => {
    episodes.forEach((episode) => {
      const path = { locale: currentLoc, params: { slug: episode } };
      result.push(path);
    });
    return result;
  }, []);

  return { paths, fallback: true };
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const hosts = [
    { name: "Justin", title: "Software Developer" },
    { name: "Fiamma", title: "Product Manager" },
    { name: "Ludovico", title: "Graphic Designer" },
  ];

  const guests = [{ name: "Mirko", title: "Intern" }];
  return {
    revalidate: 1,
    props: { participants: { hosts, guests } },
  };
};
