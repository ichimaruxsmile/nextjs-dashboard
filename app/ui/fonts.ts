import { Inter, Lusitana } from 'next/font/google';

// Body主字体，指定字体子集为拉丁文
export const inter = Inter({ subsets: ['latin'] });

// 添加辅助字体
export const lusitana = Lusitana({ subsets: ['latin'], weight: '400' })

