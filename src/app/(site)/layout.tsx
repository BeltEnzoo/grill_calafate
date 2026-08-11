import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageLoader } from "@/components/layout/PageLoader";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { ScrollProgress, BackToTop } from "@/components/layout/ScrollChrome";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { JsonLd } from "@/components/seo/JsonLd";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <JsonLd />
      <PageLoader />
      <CustomCursor />
      <ScrollProgress />
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppFloat />
      <BackToTop />
    </>
  );
}
