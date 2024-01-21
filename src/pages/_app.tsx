import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { WagmiConfig, createConfig } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import MainLayout from "@/components/MainLayout";
import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "react-query";
import { sepolia } from "wagmi/chains";

const queryClient = new QueryClient();

const config = createConfig(
  getDefaultConfig({
    walletConnectProjectId: "fd839f8b382f493dcb9bbd6ebfb998a0",
    appName: "Ghotel Government",
    chains: [sepolia],
  })
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <QueryClientProvider client={queryClient}>
        <WagmiConfig config={config}>
          <ConnectKitProvider theme="nouns">
            <MainLayout>
              <Toaster richColors />
              <Component {...pageProps} />
            </MainLayout>
          </ConnectKitProvider>
        </WagmiConfig>
      </QueryClientProvider>
    </NextUIProvider>
  );
}
