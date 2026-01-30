import Header from "@/components/Header";
import Publications from "@/components/Publications";
import Footer from "@/components/Footer";

const PublicationsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <Publications />
      </main>
      <Footer />
    </div>
  );
};

export default PublicationsPage;