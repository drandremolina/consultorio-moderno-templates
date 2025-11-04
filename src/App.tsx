import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import Cirurgias from "./pages/Cirurgias";
import OncologiaCutanea from "./pages/OncologiaCutanea";
import Blog from "./pages/Blog";
import ImunoterapiaMelanoma from "./pages/blog/ImunoterapiaMelanoma";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/cirurgias" element={<Cirurgias />} />
          <Route path="/oncologia-cutanea" element={<OncologiaCutanea />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/imunoterapia-melanoma" element={<ImunoterapiaMelanoma />} />
          <Route path="/contato" element={<Contato />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
