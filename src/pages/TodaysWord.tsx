import { Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WordCard } from "@/components/WordCard";
import { todaysWord } from "@/data/words";

const TodaysWord = () => {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen py-12 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-8">
          <Button asChild variant="ghost" className="mb-6 -ml-2">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-full gradient-bg flex items-center justify-center">
              <Calendar className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
                Today's Word
              </h1>
              <p className="text-muted-foreground text-sm">{today}</p>
            </div>
          </div>
        </div>

        {/* Word Card */}
        <div className="max-w-3xl mx-auto mb-12">
          <WordCard word={todaysWord} className="animate-scale-in" />
        </div>

        {/* Tips */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-secondary/50 border border-border rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-foreground mb-4">💡 Learning Tips</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-medium">1.</span>
                <span>Try using today's word in a sentence of your own.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-medium">2.</span>
                <span>Look for opportunities to use it in conversation today.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-medium">3.</span>
                <span>Come back tomorrow for a new word to learn!</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Navigation */}
        <div className="max-w-3xl mx-auto mt-8 flex justify-center">
          <Button asChild variant="outline" className="gap-2">
            <Link to="/archive">
              View Past Words
              <ArrowLeft className="h-4 w-4 rotate-180" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TodaysWord;
