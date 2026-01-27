import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { WordCard } from "@/components/WordCard";
import { allWords, Word } from "@/data/words";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Archive = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedWord, setSelectedWord] = useState<Word | null>(null);

  const filteredWords = allWords.filter((word) =>
    word.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
    word.definition.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen py-12 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <Button asChild variant="ghost" className="mb-6 -ml-2">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                Word Archive
              </h1>
              <p className="text-muted-foreground">
                Browse through all the words we've featured.
              </p>
            </div>
            
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search words..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>

        {/* Words Grid */}
        <div className="max-w-4xl mx-auto">
          {filteredWords.length === 0 ? (
            <div className="text-center py-16">
              <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">No words found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search query.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredWords.map((word, index) => (
                <div
                  key={word.id}
                  onClick={() => setSelectedWord(word)}
                  className="cursor-pointer animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <WordCard word={word} variant="compact" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Word Detail Dialog */}
        <Dialog open={!!selectedWord} onOpenChange={() => setSelectedWord(null)}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="sr-only">
                {selectedWord?.word}
              </DialogTitle>
            </DialogHeader>
            {selectedWord && (
              <WordCard word={selectedWord} />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Archive;
