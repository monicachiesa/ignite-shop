import { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "./styles";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        {/* Essa linha abaixo monta o código CSS e traz pronto do lado do servidor next */}
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
        <title>Ignite Shop</title>
      </Head>
      <body>
        <Main /> {/* Indica onde vão os conteúdos das páginas */}
        <NextScript /> {/* Indica em qual local do html são carregados os scripts da páginas */}
      </body>
    </Html>
  );
}
