import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Workflow from '@/components/Workflow';
import Portfolio from '@/components/Portfolio';
import WhyChooseMe from '@/components/WhyChooseMe';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Workflow />
        <Portfolio />
        <WhyChooseMe />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
