import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, BookOpen, Target, Heart, Lightbulb, Rocket, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: BookOpen,
    title: "Simplicity",
    description: "We believe learning should be straightforward. No complicated systems, just one word at a time.",
  },
  {
    icon: Target,
    title: "Consistency",
    description: "Small, daily habits lead to remarkable results. We're here to support your daily learning journey.",
  },
  {
    icon: Heart,
    title: "Accessibility",
    description: "Education should be available to everyone. Our platform is free and easy to use.",
  },
];

const roadmap = [
  {
    icon: Users,
    title: "User Accounts",
    description: "Create an account to track your progress and save favorite words.",
    status: "planned",
  },
  {
    icon: Lightbulb,
    title: "Mobile App",
    description: "Native iOS and Android apps for learning on the go.",
    status: "planned",
  },
  {
    icon: Rocket,
    title: "Premium Features",
    description: "Advanced features like quizzes, personalized word lists, and more.",
    status: "exploring",
  },
];

const About = () => {
  return (
    <div className="min-h-screen py-12 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16">
          <Button asChild variant="ghost" className="mb-6 -ml-2">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About Word of the Day
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We believe that building a strong vocabulary shouldn't be overwhelming. 
            That's why we created Word of the Day—a simple, effective way to learn 
            one new word every day.
          </p>
        </div>

        {/* Purpose */}
        <section className="max-w-3xl mx-auto mb-20">
          <div className="bg-card border border-border rounded-2xl p-8 sm:p-10 card-shadow">
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Purpose</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                In a world full of distractions and information overload, we wanted to create 
                something different—a calm, focused space for learning that respects your time 
                and attention.
              </p>
              <p>
                Word of the Day is built on a simple idea: that consistent, small steps lead to 
                meaningful progress. By learning just one word each day, you can expand your 
                vocabulary by over 365 words in a year—without feeling overwhelmed.
              </p>
              <p>
                Whether you're a student looking to improve your writing, a professional aiming 
                to communicate more effectively, or simply someone who loves language, 
                Word of the Day is here to help.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              What We Believe In
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card border border-border rounded-2xl p-6 text-center card-shadow"
              >
                <div className="h-14 w-14 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-5">
                  <value.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Built By */}
        <section className="max-w-3xl mx-auto mb-20">
          <div className="gradient-hero-bg border border-border rounded-2xl p-8 sm:p-10 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Built by BrightByte Studio</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Word of the Day is a product of BrightByte Studio, a small team passionate about 
              creating thoughtful digital experiences that make learning enjoyable and accessible.
            </p>
            <a
              href="https://brightbytestudio.space"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:underline font-medium"
            >
              Visit our website
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </section>

        {/* Roadmap */}
        <section className="max-w-3xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              What's Next
            </h2>
            <p className="text-muted-foreground">
              We're constantly working to improve Word of the Day.
            </p>
          </div>
          
          <div className="space-y-4">
            {roadmap.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 bg-card border border-border rounded-xl p-5"
              >
                <div className="h-12 w-12 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-6 w-6 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      item.status === "planned" 
                        ? "bg-primary/10 text-primary" 
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {item.status === "planned" ? "Planned" : "Exploring"}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Have Questions or Feedback?
          </h2>
          <p className="text-muted-foreground mb-8">
            We'd love to hear from you. Reach out anytime.
          </p>
          <Button asChild size="lg" className="gradient-bg text-primary-foreground border-0 px-8">
            <Link to="/contact">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </section>
      </div>
    </div>
  );
};

export default About;
