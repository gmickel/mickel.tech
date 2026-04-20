import type { Metadata } from 'next';
import './print.css';

export const metadata: Metadata = {
  // Lead magnets are not indexed — they're delivery surfaces for downloaded PDFs.
  robots: { index: false, follow: false },
};

export default function LeadMagnetsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="lead-magnet-root">{children}</div>;
}
