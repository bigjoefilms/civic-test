import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider, createConfig, useAccount, useConnect, useBalance, http } from 'wagmi';
import { embeddedWallet, userHasWallet } from '@civic/auth-web3';
import { CivicAuthProvider, UserButton, useUser } from '@civic/auth-web3/react';
import { mainnet, sepolia } from 'wagmi/chains';

const wagmiConfig = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
  connectors: [embeddedWallet()],
});

// Wagmi requires react-query
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={wagmiConfig}>
        <CivicAuthProvider clientId="<YOUR CLIENT ID>">
          <AppContent />
        </CivicAuthProvider>
      </WagmiProvider>
    </QueryClientProvider>
  );
};

const AppContent = () => {
  const userContext = useUser(); // Using the CivicAuth user context
  const { connect, connectors } = useConnect();
  const { isConnected } = useAccount();
  const balance = useBalance({
    address: userHasWallet(userContext) ? userContext.walletAddress as `0x${string}` : undefined,
  });

  // Connect to an existing Civic embedded wallet
  const connectExistingWallet = () => connect({ connector: connectors[0] });

  // Create a wallet if the user doesn't have one
  const createWallet = () => {
    if (userContext.user && !userHasWallet(userContext)) {
      return userContext.createWallet().then(connectExistingWallet);
    }
  };

  return (
    <>
      <UserButton />
      {userContext.user && (
        <div>
          {!userHasWallet(userContext) && (
            <p>
              <button onClick={createWallet}>Create Wallet</button>
            </p>
          )}
          {userHasWallet(userContext) && (
            <>
              <p>Wallet address: {userContext.walletAddress}</p>
              <p>
                Balance: {balance?.data ? `${(BigInt(balance.data.value) / BigInt(1e18)).toString()} ${balance.data.symbol}` : 'Loading...'}
              </p>
              {isConnected ? (
                <p>Wallet is connected</p>
              ) : (
                <button onClick={connectExistingWallet}>Connect Wallet</button>
              )}
            </>
          )}
        </div>
      )}
    </>
  );
};

export default App;
