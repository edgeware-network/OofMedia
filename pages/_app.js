import { ThirdwebProvider, metamaskWallet } from "@thirdweb-dev/react";
import { OofMediaProvider } from "../context/OofMediaProvider";
import { PolybaseProvider } from "@polybase/react";
import { AuthProvider } from "@polybase/react";
import "../styles/globals.css";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "mumbai";

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider activeChain={activeChain} supportedWallets={[metamaskWallet()]}>
      <OofMediaProvider>
        <PolybaseProvider>
          <AuthProvider>
            <Component {...pageProps} />
          </AuthProvider>
        </PolybaseProvider>
      </OofMediaProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
