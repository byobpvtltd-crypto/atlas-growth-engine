import { 
  Play, 
  BarChart3, 
  Download, 
  Calendar, 
  Target, 
  TrendingUp,
  FileText,
  Zap
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const actions = [
  {
    title: "Run Forecast",
    description: "Generate 90-day ROI predictions",
    icon: TrendingUp,
    variant: "default" as const,
    color: "primary"
  },
  {
    title: "Scenario Planning",
    description: "Test budget allocation changes",
    icon: Target,
    variant: "outline" as const,
    color: "accent"
  },
  {
    title: "Export Report",
    description: "Download executive summary",
    icon: Download,
    variant: "outline" as const,
    color: "success"
  },
  {
    title: "Schedule Analysis",
    description: "Set up automated insights",
    icon: Calendar,
    variant: "outline" as const,
    color: "muted"
  }
];

const quickInsights = [
  {
    title: "Weekly Performance",
    value: "+12.4%",
    subtitle: "vs last week",
    icon: BarChart3
  },
  {
    title: "Budget Utilization",
    value: "87%",
    subtitle: "of monthly budget",
    icon: Zap
  },
  {
    title: "Active Tests",
    value: "5",
    subtitle: "running experiments",
    icon: Play
  }
];

export const QuickActions = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Zap className="h-5 w-5 text-accent" />
          <span>Quick Actions</span>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Action Buttons */}
        <div className="grid grid-cols-1 gap-3">
          {actions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Button 
                key={index}
                variant={action.variant}
                className="h-auto p-4 justify-start space-x-3 hover:shadow-md transition-all duration-200"
              >
                <div className={`p-2 rounded-lg ${
                  action.color === 'primary' ? 'bg-primary/10' :
                  action.color === 'accent' ? 'bg-accent/10' :
                  action.color === 'success' ? 'bg-success/10' :
                  'bg-muted'
                }`}>
                  <Icon className={`h-4 w-4 ${
                    action.color === 'primary' ? 'text-primary' :
                    action.color === 'accent' ? 'text-accent' :
                    action.color === 'success' ? 'text-success' :
                    'text-muted-foreground'
                  }`} />
                </div>
                <div className="text-left">
                  <div className="font-medium text-sm">{action.title}</div>
                  <div className="text-xs text-muted-foreground">{action.description}</div>
                </div>
              </Button>
            );
          })}
        </div>

        {/* Quick Insights */}
        <div className="border-t pt-4">
          <h4 className="text-sm font-medium mb-3 flex items-center space-x-2">
            <FileText className="h-4 w-4 text-muted-foreground" />
            <span>Quick Insights</span>
          </h4>
          
          <div className="space-y-3">
            {quickInsights.map((insight, index) => {
              const Icon = insight.icon;
              return (
                <div key={index} className="flex items-center justify-between p-2 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="p-1.5 rounded-md bg-background">
                      <Icon className="h-3 w-3 text-muted-foreground" />
                    </div>
                    <div>
                      <div className="text-xs font-medium">{insight.title}</div>
                      <div className="text-xs text-muted-foreground">{insight.subtitle}</div>
                    </div>
                  </div>
                  <div className="text-sm font-bold text-primary">{insight.value}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="border-t pt-4">
          <Button variant="outline" className="w-full" size="sm">
            View Full Analytics Dashboard
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};