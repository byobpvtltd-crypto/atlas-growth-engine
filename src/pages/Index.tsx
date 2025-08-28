import { Header } from "@/components/Header";
import { MetricsOverview } from "@/components/MetricsOverview";
import { DataConnections } from "@/components/DataConnections";
import { InsightEngine } from "@/components/InsightEngine";
import { CompassChat } from "@/components/CompassChat";
import { QuickActions } from "@/components/QuickActions";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-8 space-y-8">
        {/* Hero Section */}
        <section className="text-center space-y-4 py-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Marketing Growth Navigator
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AI-powered marketing mix modeling platform for optimizing ROI, forecasting growth, and making data-driven investment decisions.
          </p>
        </section>

        {/* Metrics Overview */}
        <MetricsOverview />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Data & Insights */}
          <div className="lg:col-span-2 space-y-8">
            <DataConnections />
            <InsightEngine />
          </div>

          {/* Right Column - Actions & Chat */}
          <div className="space-y-8">
            <QuickActions />
            <CompassChat />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;