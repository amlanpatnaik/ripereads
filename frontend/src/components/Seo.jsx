import { Helmet } from "react-helmet-async";

export const Seo = ({ meta, jsonld = [] }) => (
  <Helmet>
    <title>{meta.title}</title>
    <meta name="description" content={meta.description} />
    <link rel="canonical" href={meta.canonical} />
    <meta property="og:title" content={meta.title} />
    <meta property="og:description" content={meta.description} />
    <meta property="og:url" content={meta.canonical} />
    <meta property="og:image" content={meta.image} />
    <meta name="twitter:card" content="summary_large_image" />
    {jsonld.map((j, i) => <script key={i} type="application/ld+json">{JSON.stringify(j)}</script>)}
  </Helmet>
);
