import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { MobileBar } from "@/components/site/MobileBar";

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a href="#inhoud" className="skip-link">
        Naar inhoud
      </a>
      <Header />
      <main id="inhoud" className="flex-1">
        {children}
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
