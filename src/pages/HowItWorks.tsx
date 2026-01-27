import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, BookOpen, Clock, Target, Brain, Repeat, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Clock,
    title: "A New Word Every Day",
    description: "Each day, we carefully select a new English word that's both useful and interesting. Our words range from everyday vocabulary to more sophisticated terms that can elevate your communication.",
  },
  {
    icon: BookOpen,
    title: "Complete Learning Package",
    description: "For each word, you get the pronunciation, part of speech, a clear definition, a real-world example sentence, and related synonyms. Everything you need to truly understand and remember the word.",
  },
  {
    icon: Target,
    title: "Practical Application",
    description: "We focus on words you can actually use. Each example sentence shows the word in context, helping you understand not just what it means, but how to use it naturally in conversation.",
  },
];

const philosophy = [
  {
    icon: Brain,
    title: "Spaced Learning",
    description: "Learning one word per day prevents cognitive overload. Your brain has time to process and store each word properly before moving on to the next.",
  },
  {
    icon: Repeat,
    title: "Consistency Over Intensity",
    description: "Small, daily habits are more effective than sporadic intense study sessions. Five minutes a day, every day, builds lasting knowledge.",
  },
  {
    icon: Heart,
    title: "Enjoyable Learning",
    description: "We believe learning should be pleasant. No tests, no pressure—just the joy of discovering new words and expanding your vocabulary.",
  },
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen py-12 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <Button asChild variant="ghost" className="mb-6">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How Word of the Day Works
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our approach is simple: one word at a time, every day. Here's how we help you build a stronger vocabulary.
          </p>
        </div>

        {/* Steps */}
        <section className="max-w-4xl mx-auto mb-20">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="flex flex-col md:flex-row gap-6 bg-card border border-border rounded-2xl p-6 sm:p-8 card-shadow"
              >
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 rounded-2xl gradient-bg flex items-center justify-center">
                    <step.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-medium text-primary">Step {index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Philosophy */}
        <section className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Our Learning Philosophy
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We've designed Word of the Day around proven principles of effective learning.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {philosophy.map((item) => (
              <div
                key={item.title}
                className="bg-secondary/50 border border-border rounded-2xl p-6 text-center"
              >
                <div className="h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Word Selection */}
        <section className="max-w-3xl mx-auto mb-20">
          <div className="bg-gradient-hero-bg border border-border rounded-2xl p-8 sm:p-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              How We Select Words
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Every word is handpicked based on several criteria: usefulness in everyday communication, 
                interesting etymology or meaning, and educational value.
              </p>
              <p>
                We avoid overly technical jargon and focus on words that can genuinely enhance your 
                vocabulary—words you might encounter in books, conversations, or professional settings.
              </p>
              <p>
                Our goal is to introduce you to words that feel both accessible and enriching, 
                helping you express yourself more precisely and eloquently.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-muted-foreground mb-8">
            Begin your vocabulary journey today with a new word.
          </p>
          <Button asChild size="lg" className="gradient-bg text-primary-foreground border-0 px-8">
            <Link to="/today">
              View Today's Word
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </section>
      </div>
    </div>
  );
};

export default HowItWorks;
