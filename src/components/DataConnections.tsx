import { CheckCircle, AlertCircle, Clock, Plus, Database, Wifi } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";

const connections = [
  {
    name: "Google Ads",
    status: "connected",
    lastSync: "2 min ago",
    health: 98,
    records: "2.3M"
  },
  {
    name: "Facebook Ads",
    status: "connected", 
    lastSync: "5 min ago",
    health: 95,
    records: "1.8M"
  },
  {
    name: "Salesforce CRM",
    status: "syncing",
    lastSync: "syncing...",
    health: 87,
    records: "450K"
  },
  {
    name: "Google Analytics",
    status: "connected",
    lastSync: "1 min ago", 
    health: 99,
    records: "5.7M"
  },
  {
    name: "Weather API",
    status: "warning",
    lastSync: "2 hours ago",
    health: 76,
    records: "12K"
  }
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "connected":
      return <CheckCircle className="h-4 w-4 text-success" />;
    case "syncing":
      return <Clock className="h-4 w-4 text-warning animate-pulse" />;
    case "warning":
      return <AlertCircle className="h-4 w-4 text-warning" />;
    default:
      return <Database className="h-4 w-4 text-muted-foreground" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "connected":
      return "bg-success/10 text-success border-success/20";
    case "syncing": 
      return "bg-warning/10 text-warning border-warning/20";
    case "warning":
      return "bg-warning/10 text-warning border-warning/20";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export const DataConnections = () => {
  return (
    <Card className="h-fit">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="space-y-1">
          <CardTitle className="flex items-center space-x-2">
            <Wifi className="h-5 w-5 text-accent" />
            <span>ConnectOS</span>
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Automated data ingestion & validation
          </p>
        </div>
        <Button variant="outline" size="sm" className="flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Add Source</span>
        </Button>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid gap-3">
          {connections.map((connection, index) => (
            <div 
              key={index}
              className="flex items-center justify-between p-3 rounded-lg border bg-card/50 hover:bg-card transition-colors"
            >
              <div className="flex items-center space-x-3">
                {getStatusIcon(connection.status)}
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-sm">{connection.name}</span>
                    <Badge variant="secondary" className={getStatusColor(connection.status)}>
                      {connection.status}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground mt-1">
                    <span>Last sync: {connection.lastSync}</span>
                    <span>•</span>
                    <span>{connection.records} records</span>
                  </div>
                </div>
              </div>

              <div className="text-right space-y-1">
                <div className="text-xs text-muted-foreground">Health</div>
                <div className="flex items-center space-x-2">
                  <Progress value={connection.health} className="w-16 h-2" />
                  <span className="text-xs font-medium w-8">{connection.health}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Total data points processed</span>
            <span className="font-medium text-primary">10.7M records</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};