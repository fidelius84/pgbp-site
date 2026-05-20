import { Helmet } from "react-helmet-async";
import { SITE_URL } from "../config/constants";

interface Props {
  title: string;
  description?: string;
  path: string;
  ogImage?: string;
  noindex?: boolean;
}

export default function Seo({ title, description, path, ogImage, noindex }: Props) {
  const fullUrl = `${SITE_URL}${path}`;
  const image = ogImage || `${SITE_URL}/assets/brand/og-image.png`;
  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={fullUrl} />
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={image} />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={image} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
    </Helmet>
  );
}
