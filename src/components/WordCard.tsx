import { Volume2, Copy, Share2, Check } from "lucide-react";
import { useState } from "react";
import { Word } from "@/data/words";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";

interface WordCardProps {
  word: Word;
  variant?: "compact" | "full";
  className?: string;
}

export function WordCard({ word, variant = "full", className = "" }: WordCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const text = `${word.word} (${word.partOfSpeech}): ${word.definition}`;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    toast({
      title: "Copied!",
      description: "Word copied to clipboard",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    const text = `📚 Word of the Day: ${word.word}\n\n${word.definition}\n\nExample: "${word.example}"`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Word of the Day: ${word.word}`,
          text,
        });
      } catch (err) {
        // User cancelled or error
      }
    } else {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied!",
        description: "Share text copied to clipboard",
      });
    }
  };

  const handlePronounce = () => {
    const utterance = new SpeechSynthesisUtterance(word.word);
    utterance.lang = "en-US";
    speechSynthesis.speak(utterance);
  };

  if (variant === "compact") {
    return (
      <div className={`bg-card border border-border rounded-xl p-5 card-shadow hover:card-shadow-lg transition-all duration-300 group ${className}`}>
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
              {word.word}
            </h3>
            <p className="text-sm text-muted-foreground">{word.pronunciation}</p>
          </div>
          <Badge variant="secondary" className="text-xs">
            {word.partOfSpeech}
          </Badge>
        </div>
        <p className="text-muted-foreground text-sm line-clamp-2">{word.definition}</p>
        <p className="text-xs text-muted-foreground mt-3">
          {new Date(word.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      </div>
    );
  }

  return (
    <div className={`bg-card border border-border rounded-2xl p-6 sm:p-8 card-shadow-lg ${className}`}>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text">
              {word.word}
            </h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={handlePronounce}
              className="h-10 w-10 rounded-full hover:bg-primary/10 hover:text-primary"
              aria-label="Pronounce word"
            >
              <Volume2 className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-muted-foreground">{word.pronunciation}</span>
            <Badge className="gradient-bg text-primary-foreground border-0">
              {word.partOfSpeech}
            </Badge>
          </div>
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={handleCopy}
            className="h-10 w-10 rounded-full"
            aria-label="Copy word"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handleShare}
            className="h-10 w-10 rounded-full"
            aria-label="Share word"
          >
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Definition */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-2">
          Definition
        </h3>
        <p className="text-lg text-foreground leading-relaxed">{word.definition}</p>
      </div>

      {/* Example */}
      <div className="mb-6 p-4 rounded-xl bg-secondary/50 border-l-4 border-primary">
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-2">
          Example
        </h3>
        <p className="text-foreground italic">"{word.example}"</p>
      </div>

      {/* Synonyms */}
      <div>
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
          Synonyms
        </h3>
        <div className="flex flex-wrap gap-2">
          {word.synonyms.map((synonym) => (
            <Badge
              key={synonym}
              variant="outline"
              className="px-3 py-1 text-sm hover:bg-primary/10 hover:border-primary transition-colors cursor-default"
            >
              {synonym}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
