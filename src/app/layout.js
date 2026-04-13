import localFont from 'next/font/local'
import { Montserrat, Raleway} from "next/font/google";
import "./globals.css";

export const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

export const raleway = Raleway({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
});

export const mm9Prose = localFont({
  src: [
    {
      path: '../assets/fonts/mm9proseantiquecyr_normal.ttf', 
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--font-mm9',
})

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={raleway.className}>
        {children}
      </body>
    </html>
  );
}