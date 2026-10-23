import Nav from './components/Nav';
import Hero from './components/Hero';
import LiveFeed from './components/LiveFeed';
import Products from './components/Products';
import Demo from './components/Demo';
import Features from './components/Features';
import Notify from './components/Notify';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-ink text-cream">
      <Nav />
      <main>
        <Hero />
        <LiveFeed />
        <Products />
        <Demo />
        <Features />
        <Notify />
      </main>
      <Footer />
    </div>
  );
}

export default App;
