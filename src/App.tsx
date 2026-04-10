/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Amenities from './components/Amenities';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Preloader, ScrollProgress } from './components/Effects';

export default function App() {
  return (
    <main className="relative min-h-screen bg-white">
      <Preloader />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Amenities />
      <Gallery />
      <Location />
      <Contact />
      <Footer />
    </main>
  );
}
