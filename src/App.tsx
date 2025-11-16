import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const Sobre = lazy(() => import("./pages/Sobre"));
const Cirurgias = lazy(() => import("./pages/Cirurgias"));
const OncologiaCutanea = lazy(() => import("./pages/OncologiaCutanea"));
const TratamentoMelanoma = lazy(() => import("./pages/TratamentoMelanoma"));
const Blog = lazy(() => import("./pages/Blog"));
const ImunoterapiaMelanoma = lazy(() => import("./pages/blog/ImunoterapiaMelanoma"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/cirurgias" element={<Cirurgias />} />
            <Route path="/oncologia-cutanea" element={<OncologiaCutanea />} />
            <Route path="/tratamento-melanoma" element={<TratamentoMelanoma />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/imunoterapia-melanoma" element={<ImunoterapiaMelanoma />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
