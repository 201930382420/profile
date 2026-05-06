import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '李雨帆 Sail｜Personal Resume Website',
  description: '统计学硕士、数据分析、策略运营、BI 可视化、用户增长个人简历网站。',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
