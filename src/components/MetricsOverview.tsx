import { TrendingUp, TrendingDown, DollarSign, Target, BarChart3, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const metrics = [
  {
    title: "Total Marketing ROI",
    value: "4.2x",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
    description: "vs last quarter"
  },
  {
    title: "Attribution Accuracy",
    value: "94.3%",
    change: "+2.1%",
    trend: "up",
    icon: Target,
    description: "ML confidence score"
  },
  {
    title: "Active Campaigns",
    value: "127",
    change: "+18",
    trend: "up",
    icon: BarChart3,
    description: "across all channels"
  },
  {
    title: "Forecast Precision",
    value: "91.7%",
    change: "-0.8%",
    trend: "down",
    icon: Zap,
    description: "30-day accuracy"
  }
];

export const MetricsOverview = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        const isPositive = metric.trend === "up";
        
        return (
          <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {metric.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${isPositive ? 'bg-success/10' : 'bg-warning/10'}`}>
                <Icon className={`h-4 w-4 ${isPositive ? 'text-success' : 'text-warning'}`} />
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-bold text-primary">{metric.value}</span>
                <Badge 
                  variant="secondary" 
                  className={`${isPositive ? 'bg-success/10 text-success border-success/20' : 'bg-warning/10 text-warning border-warning/20'} flex items-center space-x-1`}
                >
                  {isPositive ? (
                    <TrendingUp className="h-3 w-3" />
                  ) : (
                    <TrendingDown className="h-3 w-3" />
                  )}
                  <span className="text-xs font-medium">{metric.change}</span>
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground mt-2">{metric.description}</p>
            </CardContent>

            {/* Gradient accent */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-success opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Card>
        );
      })}
    </section>
  );
};