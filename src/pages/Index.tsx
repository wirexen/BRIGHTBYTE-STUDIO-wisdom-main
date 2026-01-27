import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Clock, Sparkles, Target, Bell, Star, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WordCard } from "@/components/WordCard";
import { todaysWord } from "@/data/words";

const steps = [
  {
    icon: Clock,
    title: "Visit Daily",
    description: "Come back each day for a carefully selected word to expand your vocabulary.",
  },
  {
    icon: BookOpen,
    title: "Learn & Understand",
    description: "Read the definition, pronunciation, and see the word used in context.",
  },
  {
    icon: Target,
    title: "Practice & Remember",
    description: "Use the word in your daily conversations to make it stick.",
  },
];

const benefits = [
  {
    icon: Sparkles,
    title: "Daily Learning",
    description: "One word at a time, every day. Small steps lead to big improvements.",
  },
  {
    icon: BookOpen,
    title: "Simple Explanations",
    description: "Clear definitions with real-world examples that make learning easy.",
  },
  {
    icon: Target,
    title: "Zero Overwhelm",
    description: "No pressure, no tests. Just gentle, consistent vocabulary building.",
  },
];

const futureFeatures = [
  {
    icon: TrendingUp,
    title: "Learning Streaks",
    description: "Track your daily visits and build a learning habit.",
  },
  {
    icon: Bell,
    title: "Daily Notifications",
    description: "Get reminded to check your daily word.",
  },
  {
    icon: Star,
    title: "Favorite Words",
    description: "Save words you love for quick reference.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
              <Sparkles className="h-4 w-4" />
              <span>Build your vocabulary effortlessly</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-fade-in-up">
              Learn One New Word{" "}
              <span className="gradient-text">Every Day</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up stagger-1">
              Build your vocabulary effortlessly with a daily word, clear definitions, and real examples. Simple, consistent, and effective.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up stagger-2">
              <Button asChild size="lg" className="gradient-bg text-primary-foreground border-0 px-8 h-12 text-base font-medium hover:opacity-90 transition-opacity">
                <Link to="/today">
                  View Today's Word
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8 h-12 text-base font-medium">
                <Link to="/how-it-works">
                  How It Works
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              How Word of the Day Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A simple three-step process to expand your vocabulary naturally.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative bg-card border border-border rounded-2xl p-8 text-center card-shadow hover:card-shadow-lg transition-all duration-300"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {index + 1}
                </div>
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Word Card */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Today's Featured Word
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here's a preview of what you'll learn each day.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <WordCard word={todaysWord} />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Learn With Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe in simple, consistent learning that fits into your daily routine.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-card border border-border rounded-2xl p-8 card-shadow hover:card-shadow-lg transition-all duration-300"
              >
                <div className="h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                  <benefit.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Features */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4" />
              <span>Coming Soon</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Features on the Horizon
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're constantly improving to make your learning experience even better.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {futureFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-card border border-dashed border-border rounded-2xl p-8 opacity-80 hover:opacity-100 transition-opacity"
              >
                <div className="h-14 w-14 rounded-2xl bg-muted flex items-center justify-center mb-6">
                  <feature.icon className="h-7 w-7 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28 gradient-hero-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Start Building Your Vocabulary Today
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              Join thousands of learners who are expanding their vocabulary one word at a time.
            </p>
            <Button asChild size="lg" className="gradient-bg text-primary-foreground border-0 px-10 h-14 text-lg font-medium hover:opacity-90 transition-opacity">
              <Link to="/today">
                View Today's Word
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
