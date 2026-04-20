import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import AiScopingPdf from '@/components/lead-magnets/ai-scoping';
import ExpertIntakePdf from '@/components/lead-magnets/expert-intake';
import PdlcMaturityPdf from '@/components/lead-magnets/pdlc-maturity';
import { getLeadMagnet, LEAD_MAGNETS } from '@/lib/lead-magnets';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return LEAD_MAGNETS.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const magnet = getLeadMagnet(slug);
  if (!magnet) {
    return { title: 'Lead magnet not found' };
  }
  return {
    title: `${magnet.title} · Mickel Tech`,
    description: magnet.subtitle,
    robots: { index: false, follow: false },
  };
}

export default async function LeadMagnetPage({ params }: PageProps) {
  const { slug } = await params;
  const magnet = getLeadMagnet(slug);
  if (!magnet) {
    notFound();
  }

  switch (magnet.slug) {
    case 'pdlc-maturity-l0-l4':
      return <PdlcMaturityPdf />;
    case 'ai-engagement-scoping':
      return <AiScopingPdf />;
    case 'expert-intake-counsel':
      return <ExpertIntakePdf />;
    default:
      notFound();
  }
}
