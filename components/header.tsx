import React from "react";
import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import useTranslation from "next-translate/useTranslation";

import styles from "./header.module.css";

export default function Header() {
  const { t, lang } = useTranslation();
  const title = t("common:title");

  function changeToEn() {
    Router.push("/", undefined, { locale: "en" });
  }

  return (
    <>
      <Head>
        <title>
          {title} | ({lang.toUpperCase()})
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <h1>{title}</h1>
        {lang !== "es" && (
          <Link href="/" locale="en-gb">
            <a>English</a>
          </Link>
        )}
        {lang !== "ca" && (
          <Link href="/" locale="fr-fr">
            <a>French</a>
          </Link>
        )}
        {lang !== "en" && (
          <>
            <Link href="/" locale="es-es">
              <a>Spanish</a>
            </Link>
          </>
        )}
      </header>
    </>
  );
}
