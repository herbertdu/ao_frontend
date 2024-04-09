import { Inter } from 'next/font/google';
import './globals.css';
import { ArweaveWalletKit } from 'arweave-wallet-kit';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ArweaveWalletKit
                    config={{
                        permissions: ['ACCESS_ADDRESS', 'SIGN_TRANSACTION'],
                        ensurePermissions: true,
                    }}
                    theme={{
                        displayTheme: 'light',
                    }}
                >
                    {children}
                </ArweaveWalletKit>
            </body>
        </html>
    );
}
