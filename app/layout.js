import { DM_Sans } from 'next/font/google';
import Navbar from './components/navbar';
import './globals.css';

const dm_sans = DM_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'NFT Marketplaces.',
  description: 'Sell your NFT token in this platform.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
