import "@/styles/globals.css";
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import en from "../locale/en/message.json";
import ru from "../locale/ru/message.json";
import uz from "../locale/uz/message.json";
import { usePlasmicTranslator } from "@/i18";

export default function MyApp({ Component, pageProps }: AppProps) {
  const locale = useRouter().query.lang ?? "en";
  const message = locale === "en" ? en : locale === "ru" ? ru : uz;

  const translator = usePlasmicTranslator();

  return (
    <IntlProvider locale={locale} messages={message}>
      <PlasmicRootProvider Head={Head} translator={translator}>
        <Component {...pageProps} />
      </PlasmicRootProvider>
    </IntlProvider>
  );
}
