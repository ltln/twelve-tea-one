import localFont from 'next/font/local';
import { Quicksand } from 'next/font/google'
 
export const quicksand = Quicksand({
  weight: '400',
  subsets: ['latin', 'vietnamese'],
})

export const averta = localFont({
    src: [
        {
            path: './Averta-Regular.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: './Averta-RegularItalic.otf',
            weight: '400',
            style: 'italic',
        },
        {
            path: './Averta-Bold.otf',
            weight: '700',
            style: 'normal',
        },
        {
            path: './Averta-BoldItalic.otf',
            weight: '700',
            style: 'italic',
        },
    ],
    display: 'swap',
    variable: '--font-averta'
})