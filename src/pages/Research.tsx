import Header from "@/components/Header";
import ResearchAreas from "@/components/ResearchAreas";
import Footer from "@/components/Footer";

const Research = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <ResearchAreas />
      </main>
      <Footer />
    </div>
  );
};

export default Research;