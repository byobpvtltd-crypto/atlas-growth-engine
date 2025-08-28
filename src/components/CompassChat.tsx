import { MessageSquare, Send, Bot, User, ChevronDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";

const conversations = [
  {
    type: "user",
    message: "What's our best performing channel this quarter?",
    time: "2m ago"
  },
  {
    type: "bot",
    message: "Based on the latest MMM analysis, Connected TV is your top performer with 4.8x ROAS. Here's the breakdown:",
    time: "2m ago",
    data: {
      channels: [
        { name: "Connected TV", roas: "4.8x", spend: "$2.1M" },
        { name: "Paid Search", roas: "3.2x", spend: "$1.8M" },
        { name: "Email", roas: "6.1x", spend: "$340K" }
      ]
    }
  },
  {
    type: "user", 
    message: "Should we increase CTV budget?",
    time: "1m ago"
  },
  {
    type: "bot",
    message: "Yes, I recommend a 25% budget increase. The saturation analysis shows CTV can handle up to $2.7M before diminishing returns kick in.",
    time: "1m ago"
  }
];

export const CompassChat = () => {
  return (
    <Card className="h-fit max-h-[600px] flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between pb-3">
        <div className="space-y-1">
          <CardTitle className="flex items-center space-x-2">
            <div className="p-1 rounded-md bg-accent/10">
              <Bot className="h-4 w-4 text-accent" />
            </div>
            <span>Compass AI</span>
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Ask anything about your marketing performance
          </p>
        </div>
        <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
          Online
        </Badge>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col space-y-4">
        {/* Chat Messages */}
        <div className="flex-1 space-y-4 max-h-80 overflow-y-auto">
          {conversations.map((conv, index) => (
            <div key={index} className={`flex ${conv.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex items-start space-x-2 max-w-[85%] ${conv.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <Avatar className="h-6 w-6">
                  <AvatarFallback className={`text-xs ${conv.type === 'user' ? 'bg-primary text-primary-foreground' : 'bg-accent text-accent-foreground'}`}>
                    {conv.type === 'user' ? <User className="h-3 w-3" /> : <Bot className="h-3 w-3" />}
                  </AvatarFallback>
                </Avatar>
                
                <div className={`space-y-2 ${conv.type === 'user' ? 'items-end' : 'items-start'} flex flex-col`}>
                  <div className={`rounded-lg px-3 py-2 text-sm ${
                    conv.type === 'user' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted border'
                  }`}>
                    {conv.message}
                  </div>

                  {conv.data && (
                    <div className="bg-card border rounded-lg p-3 space-y-2 text-xs">
                      <div className="font-medium text-foreground">Top Performing Channels</div>
                      {conv.data.channels.map((channel, i) => (
                        <div key={i} className="flex justify-between items-center">
                          <span className="text-muted-foreground">{channel.name}</span>
                          <div className="flex space-x-2">
                            <Badge variant="secondary" className="text-xs">
                              {channel.roas}
                            </Badge>
                            <span className="text-muted-foreground">{channel.spend}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <span className="text-xs text-muted-foreground">{conv.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="border-t pt-4">
          <div className="flex space-x-2">
            <Input 
              placeholder="Ask Compass AI about your marketing performance..."
              className="flex-1"
            />
            <Button size="sm" className="bg-accent hover:bg-accent/90">
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
            <span>Powered by Atlas ML Engine</span>
            <Button variant="ghost" size="sm" className="h-auto p-1 text-xs">
              <ChevronDown className="h-3 w-3 mr-1" />
              Suggestions
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};