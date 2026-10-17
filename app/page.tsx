"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TargetAudience from "@/components/TargetAudience";
import CatalogSection from "@/components/CatalogSection";
import PriceListBanner from "@/components/PriceListBanner";
import OrderForm from "@/components/OrderForm";
import ContactsMapSection from "@/components/ContactsMapSection";
import Footer from "@/components/Footer";
import CallbackModal from "@/components/CallbackModal";
import SchemeModal from "@/components/SchemeModal";

export default function Home() {
  const [callbackModalOpen, setCallbackModalOpen] = useState(false);
  const [schemeModalOpen, setSchemeModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [selectedProduct, setSelectedProduct] = useState<string | undefined>(undefined);

  const handleOpenCallback = (serviceTitle?: string) => {
    setSelectedService(serviceTitle);
    setCallbackModalOpen(true);
  };

  const handleSelectProduct = (productName: string) => {
    setSelectedProduct(productName);
    const orderSection = document.getElementById("order");
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#121212] selection:bg-[#42131E] selection:text-white">
      {/* Navigation Header */}
      <Header
        onOpenCallback={() => handleOpenCallback()}
      />

      {/* Hero Section */}
      <Hero
        onOpenCallback={() => handleOpenCallback()}
      />

      {/* 01: About Company & Distinctives */}
      <AboutSection />

      {/* 02: Core Competencies & Services */}
      <ServicesSection
        onSelectService={(svcName) => handleOpenCallback(svcName)}
      />

      {/* 03: Industry Solutions & Target Audience */}
      <TargetAudience
        onOpenCallback={() => handleOpenCallback()}
      />

      {/* 04: Product Catalog & Standards */}
      <CatalogSection
        onSelectProduct={handleSelectProduct}
      />

      {/* 05: Price-list Banner (XLS 8MB) */}
      <PriceListBanner
        onOpenOrder={() => {
          const orderSection = document.getElementById("order");
          if (orderSection) {
            orderSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
      />

      {/* 06: Order Calculation & File Upload Form */}
      <OrderForm
        initialSubject={selectedProduct}
      />

      {/* 07: Contacts, Locations & Map */}
      <ContactsMapSection
        onOpenSchemeModal={() => setSchemeModalOpen(true)}
      />

      {/* Architectural Footer */}
      <Footer />

      {/* Interactive Modals */}
      <CallbackModal
        isOpen={callbackModalOpen}
        onClose={() => {
          setCallbackModalOpen(false);
          setSelectedService(undefined);
        }}
        serviceTitle={selectedService}
      />

      <SchemeModal
        isOpen={schemeModalOpen}
        onClose={() => setSchemeModalOpen(false)}
      />
    </main>
  );
}
