import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import { PlenaryTalks } from "./pages/plenarytalks";
import {PanelDiscussion} from "./pages/paneldiscussion";
import {ResearchContest} from "./pages/researchcontest";
import {ResearchHackathon} from "./pages/researchhackathon";
import {Team} from "./pages/team";
import {Sponsers} from "./pages/sponsers";
import {Venue} from "./pages/venue";
import {PreviousAssociates} from "./pages/previous-associates";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/plenary-talks" component={PlenaryTalks} />
      <Route path="/panel-discussion" component={PanelDiscussion} />
      <Route path="/research-contest" component={ResearchContest} />
      <Route path="/research-hackathon" component={ResearchHackathon} />
      <Route path="/team" component={Team} />
      <Route path="/sponsors" component={Sponsers} />
      <Route path="/venue" component={Venue} />
      <Route path="/associates" component={PreviousAssociates} />
      {/* 404 route must be last */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
