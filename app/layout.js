import { DM_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import Footer from './components/layout/footer';
import Navbar from './components/layout/navbar';
import './globals.css';

// Font files can be colocated inside of `app`
const integralcf = localFont({
  src: './integralcf-bold.otf',
  variable: '--font-integralcf'
})

const dm_sans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans'
});

export const metadata = {
  title: 'NFT Marketplaces.',
  description: 'Sell your NFT token in this platform.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dm_sans.variable} ${integralcf.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
