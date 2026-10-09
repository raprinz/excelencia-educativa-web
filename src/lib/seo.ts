const SITE_URL = "https://excelenciaeducativa.co";

export function canonicalLink(path: string) {
  return {
    rel: "canonical",
    href: new URL(path, SITE_URL).toString(),
  };
}

export function pageSocialMeta(
  path: string,
  title: string,
  description: string,
) {
  return [
    { property: "og:url", content: new URL(path, SITE_URL).toString() },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
}
