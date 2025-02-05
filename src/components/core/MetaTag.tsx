import Head from "next/head";

interface MetaTagsProps {
  title?: string;
  description?: string;
}

export default function MetaTags({title, description}: MetaTagsProps) {
  title = title || process.env.REACT_APP_NAME;
  description = description || process.env.REACT_APP_DESCRIPTION;

  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title}/>
      <meta property="og:description" content={description}/>
      <link rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"/>
    </Head>
  )
}