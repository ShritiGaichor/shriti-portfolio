
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Project Pages
import TicketBookingSystem from "./pages/projects/TicketBookingSystem";
import OnestopNDT from "./pages/projects/OnestopNDT";
import SwimmingPoolBooking from "./pages/projects/SwimmingPoolBooking";
import Facebio from "./pages/projects/Facebio";
import ContentManagementSystem from "./pages/projects/ContentManagementSystem";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Project Routes */}
          <Route path="/projects/ticket-booking-system" element={<TicketBookingSystem />} />
          <Route path="/projects/onestop-ndt" element={<OnestopNDT />} />
          <Route path="/projects/swimming-pool-booking" element={<SwimmingPoolBooking />} />
          <Route path="/projects/facebio" element={<Facebio />} />
          <Route path="/projects/content-management-system" element={<ContentManagementSystem />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
