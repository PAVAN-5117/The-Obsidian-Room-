import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Heritage } from './components/Heritage';
import { Masters } from './components/Masters';
import { ServicesMenu } from './components/ServicesMenu';
import { Atmosphere } from './components/Atmosphere';
import { Accolades } from './components/Accolades';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

export const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [selectedMasterId, setSelectedMasterId] = useState<string | null>(null);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  const handleOpenBooking = (masterId?: string, serviceId?: string) => {
    setSelectedMasterId(masterId || null);
    setSelectedServiceId(serviceId || null);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedMasterId(null);
    setSelectedServiceId(null);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F3F4F6] selection:bg-[#C5A059] selection:text-[#0A0A0A] font-sans antialiased relative">
      {/* Luxury Navigation Bar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* 1. Cinematic Hero Section */}
      <Hero onOpenBooking={() => handleOpenBooking()} />

      {/* 2. The Heritage (Brand Story) */}
      <Heritage />

      {/* 3. The Masters (Team Lookbook) */}
      <Masters onSelectMaster={(mId) => handleOpenBooking(mId, undefined)} />

      {/* 4. Services & Pricing (Fine-Dining Menu Format) */}
      <ServicesMenu onSelectService={(sId) => handleOpenBooking(undefined, sId)} />

      {/* Hospitality & Amenities Atmosphere */}
      <Atmosphere />

      {/* Editorial Accolades */}
      <Accolades />

      {/* 5. Footer Details */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Custom 3-Step Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preSelectedMasterId={selectedMasterId}
        preSelectedServiceId={selectedServiceId}
      />
    </div>
  );
};

export default App;
