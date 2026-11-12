import { serializeJsonLd, type JsonLdGraph } from "@/app/lib/structured-data";

type JsonLdProps = {
  id: string;
  data: JsonLdGraph;
};

export function JsonLd({ id, data }: JsonLdProps) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}
