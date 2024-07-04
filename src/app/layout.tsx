import type { Metadata } from 'next';
import { fonts } from './fonts'
import { Providers } from './providers'


export const metadata: Metadata = {
  title: 'Pryzm Screentest',
  description: 'Simple project showcase',
};


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className={fonts.rubik.variable}>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
