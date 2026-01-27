import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Terms = () => {
  return (
    <div className="min-h-screen py-12 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Button asChild variant="ghost" className="mb-6 -ml-2">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Terms of Service
          </h1>
          <p className="text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <div className="space-y-8">
              <section className="bg-card border border-border rounded-xl p-6 sm:p-8">
                <h2 className="text-xl font-semibold text-foreground mb-4">Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using Word of the Day, you agree to be bound by these Terms of Service. 
                  If you do not agree with any part of these terms, you may not use our service.
                </p>
              </section>

              <section className="bg-card border border-border rounded-xl p-6 sm:p-8">
                <h2 className="text-xl font-semibold text-foreground mb-4">Use of Service</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>You agree to use Word of the Day only for lawful purposes and in accordance with these Terms. You agree not to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Use the service in any way that violates applicable laws or regulations</li>
                    <li>Attempt to interfere with or disrupt the service or its servers</li>
                    <li>Copy, modify, or distribute our content without permission</li>
                    <li>Use automated systems to access the service without our consent</li>
                  </ul>
                </div>
              </section>

              <section className="bg-card border border-border rounded-xl p-6 sm:p-8">
                <h2 className="text-xl font-semibold text-foreground mb-4">Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The content, features, and functionality of Word of the Day, including but not limited to 
                  text, graphics, logos, and software, are owned by BrightByte Studio and are protected by 
                  international copyright and trademark laws. You may use our content for personal, 
                  non-commercial purposes only.
                </p>
              </section>

              <section className="bg-card border border-border rounded-xl p-6 sm:p-8">
                <h2 className="text-xl font-semibold text-foreground mb-4">Content Disclaimer</h2>
                <p className="text-muted-foreground leading-relaxed">
                  While we strive to provide accurate and helpful word definitions, examples, and related 
                  content, we make no warranties about the completeness, reliability, or accuracy of this 
                  information. The content is provided for educational purposes and should not be used as 
                  a substitute for professional linguistic or educational advice.
                </p>
              </section>

              <section className="bg-card border border-border rounded-xl p-6 sm:p-8">
                <h2 className="text-xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To the fullest extent permitted by law, BrightByte Studio shall not be liable for any 
                  indirect, incidental, special, consequential, or punitive damages, or any loss of profits 
                  or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, 
                  or other intangible losses resulting from your use of our service.
                </p>
              </section>

              <section className="bg-card border border-border rounded-xl p-6 sm:p-8">
                <h2 className="text-xl font-semibold text-foreground mb-4">Changes to Service</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify, suspend, or discontinue Word of the Day at any time, 
                  with or without notice. We shall not be liable to you or any third party for any 
                  modification, suspension, or discontinuation of the service.
                </p>
              </section>

              <section className="bg-card border border-border rounded-xl p-6 sm:p-8">
                <h2 className="text-xl font-semibold text-foreground mb-4">Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may revise these Terms of Service from time to time. The most current version will 
                  always be available on this page. By continuing to use the service after changes become 
                  effective, you agree to be bound by the revised terms.
                </p>
              </section>

              <section className="bg-card border border-border rounded-xl p-6 sm:p-8">
                <h2 className="text-xl font-semibold text-foreground mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at{" "}
                  <a href="mailto:xiangdee2@gmail.com" className="text-primary hover:underline">
                    xiangdee2@gmail.com
                  </a>
                  .
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
