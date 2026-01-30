import Header from "@/components/Header";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

const Teaching = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <Education />
      </main>
      <Footer />
    </div>
  );
};

export default Teaching;