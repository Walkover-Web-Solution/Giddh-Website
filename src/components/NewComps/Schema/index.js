import Head from "next/head";

export default function Schema({ schema }) {
  if (schema && schema.length > 0) {
    return (
      <Head>
        {schema.map((content, index) => {
          return (
            <script key={index} type="application/ld+json">
              {JSON.stringify(content)}
            </script>
          );
        })}
      </Head>
    );
  }
}
