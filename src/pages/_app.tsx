import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { WagmiConfig, createConfig } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import MainLayout from "@/components/MainLayout";
import { NextUIProvider } from "@nextui-org/react";

const config = createConfig(
  getDefaultConfig({
    alchemyId: "",
    walletConnectProjectId: "",
    appName: "Ghotel Government",
  })
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <WagmiConfig config={config}>
        <ConnectKitProvider theme="nouns">
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </ConnectKitProvider>
      </WagmiConfig>
    </NextUIProvider>
  );
}
