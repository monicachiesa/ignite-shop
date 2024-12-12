import type { AppProps } from "next/app";
import { globalStyles } from "./styles/global";
import logoImg from "../assets/logo.png";
import { Container, Header } from "./styles/pages/app";

globalStyles(); //chama a funçao de estilização global que criamos lá no global.ts

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <img src={logoImg.src} alt="" />
      </Header>

      <Component {...pageProps} />
    </Container>
  );
}
