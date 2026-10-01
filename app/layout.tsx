import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata={title:'SAT-AGRO AMÉRICAS',description:'Inteligencia climática, ambiental y productiva para América.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es"><body>{children}</body></html>}
