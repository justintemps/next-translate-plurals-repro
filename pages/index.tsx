import React from "react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import Header from "../components/header";

export default function Home() {
  const { t } = useTranslation("home");
  const description = t("common:description");
  const linkName = t("common:more-examples");

  return (
    <>
      <Header />
      <p>{description}</p>
      <ul>
        <li>
          <Link href="/podcast/episode1">
            <a>Episode 1</a>
          </Link>
        </li>
        <li>
          <Link href="/podcast/episode2">
            <a>Episode 2</a>
          </Link>
        </li>
        <li>
          <Link href="/podcast/episode3">
            <a>Episode 3</a>
          </Link>
        </li>
      </ul>
    </>
  );
}
