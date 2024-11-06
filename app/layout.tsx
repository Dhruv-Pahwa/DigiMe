"use client"

import {defineChain} from 'viem'
import {Outfit} from 'next/font/google'
import './globals.css'

import {PrivyProvider} from '@privy-io/react-auth';
const font=Outfit({subsets:['latin']})

const BitTorrent = defineChain({
  id: 1029,
  name: "BitTorrent Chain Testnet",
  network: "BitTorrent Chain Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "BitTorrent Chain Testnet",
    symbol: "BTTC",
  },
  rpcUrls: {
    default: {
      http: ["https://pre-rpc.bt.io/"],
    },
  } as any,
  blockExplorers: {
    default: { name: "Explorer", url: "https://testscan.bt.io" },
  },
}) as any;

export default function RootLayout({
    children,
}:{
    children:React.ReactNode
}) {
    return(
        <html lang="en">
            <body className={font.className}>
            <PrivyProvider
      appId="cm0bbk3rr01g3filpktpk9nxc"
      config={{
        // Customize Privy's appearance in your app
        appearance: {
          theme: 'light',
          accentColor: '#676FFF',
          logo: 'https://your-logo-url',
        },
        // Create embedded wallets for users who don't have a wallet
        embeddedWallets: {
          createOnLogin: 'users-without-wallets',
        },
        defaultChain: BitTorrent,
        supportedChains: [BitTorrent],
      }}
    >
      {children}
    </PrivyProvider>
            </body>
        </html>
    )
}