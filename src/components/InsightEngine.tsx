import { Brain, TrendingUp, Target, Zap, ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";

const insights = [
  {
    type: "opportunity",
    title: "TV Spend Optimization Detected",
    description: "Shifting 15% of TV budget to Connected TV could increase ROAS by 23%",
    confidence: 94,
    impact: "High",
    timeframe: "Next 30 days"
  },
  {
    type: "warning", 
    title: "Paid Social Saturation Risk",
    description: "Facebook Ads showing diminishing returns above $50K/week threshold",
    confidence: 87,
    impact: "Medium",
    timeframe: "Immediate"
  },
  {
    type: "success",
    title: "Email Marketing Performance",
    description: "Segmented email campaigns outperforming by 31% vs baseline model",
    confidence: 96,
    impact: "Medium",
    timeframe: "Ongoing"
  }
];

const getInsightIcon = (type: string) => {
  switch (type) {
    case "opportunity":
      return <TrendingUp className="h-4 w-4 text-success" />;
    case "warning":
      return <Target className="h-4 w-4 text-warning" />;
    case "success":
      return <Zap className="h-4 w-4 text-accent" />;
    default:
      return <Brain className="h-4 w-4 text-primary" />;
  }
};

const getInsightColor = (type: string) => {
  switch (type) {
    case "opportunity":
      return "border-l-success bg-success/5";
    case "warning":
      return "border-l-warning bg-warning/5";
    case "success":
      return "border-l-accent bg-accent/5";
    default:
      return "border-l-primary bg-primary/5";
  }
};

const getImpactColor = (impact: string) => {
  switch (impact.toLowerCase()) {
    case "high":
      return "bg-success/10 text-success border-success/20";
    case "medium":
      return "bg-warning/10 text-warning border-warning/20";
    case "low":
      return "bg-muted text-muted-foreground border-muted";
    default:
      return "bg-muted text-muted-foreground border-muted";
  }
};

export const InsightEngine = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="space-y-1">
          <CardTitle className="flex items-center space-x-2">
            <Brain className="h-5 w-5 text-primary" />
            <span>InsightEngine</span>
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            AI-powered marketing mix insights & recommendations
          </p>
        </div>
        <Button variant="outline" size="sm">
          View All Insights
        </Button>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid gap-4">
          {insights.map((insight, index) => (
            <div 
              key={index}
              className={`p-4 rounded-lg border-l-4 ${getInsightColor(insight.type)} hover:shadow-md transition-shadow cursor-pointer group`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3 flex-1">
                  {getInsightIcon(insight.type)}
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                        {insight.title}
                      </h4>
                      <ArrowUpRight className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {insight.description}
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-muted-foreground">Confidence:</span>
                        <Progress value={insight.confidence} className="w-16 h-2" />
                        <span className="text-xs font-medium">{insight.confidence}%</span>
                      </div>
                      <Badge variant="secondary" className={getImpactColor(insight.impact)}>
                        {insight.impact} Impact
                      </Badge>
                      <span className="text-xs text-muted-foreground">{insight.timeframe}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>Model last updated: 23 minutes ago</span>
              <span>•</span>
              <span>Next refresh in 37 minutes</span>
            </div>
            <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
              Atlas v2.1
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};