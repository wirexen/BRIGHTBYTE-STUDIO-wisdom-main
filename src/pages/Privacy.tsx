import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Privacy = () => {
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
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <div className="space-y-8">
              <section className="bg-card border border-border rounded-xl p-6 sm:p-8">
                <h2 className="text-xl font-semibold text-foreground mb-4">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At Word of the Day, we take your privacy seriously. This Privacy Policy explains how we 
                  collect, use, and protect your information when you use our website and services. We are 
                  committed to ensuring that your privacy is protected.
                </p>
              </section>

              <section className="bg-card border border-border rounded-xl p-6 sm:p-8">
                <h2 className="text-xl font-semibold text-foreground mb-4">Information We Collect</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>We may collect the following types of information:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong className="text-foreground">Contact Information:</strong> When you use our contact form, 
                      we collect your name, email address, and message content.
                    </li>
                    <li>
                      <strong className="text-foreground">Usage Data:</strong> We may collect anonymous usage data to 
                      improve our service, including pages visited and features used.
                    </li>
                    <li>
                      <strong className="text-foreground">Cookies:</strong> We use essential cookies to ensure the 
                      website functions properly and to remember your preferences (such as dark mode).
                    </li>
                  </ul>
                </div>
              </section>

              <section className="bg-card border border-border rounded-xl p-6 sm:p-8">
                <h2 className="text-xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Respond to your inquiries and provide customer support</li>
                    <li>Improve and personalize your experience on our website</li>
                    <li>Analyze how our service is used to make improvements</li>
                    <li>Send you updates about our service (only if you opt in)</li>
                  </ul>
                </div>
              </section>

              <section className="bg-card border border-border rounded-xl p-6 sm:p-8">
                <h2 className="text-xl font-semibold text-foreground mb-4">Data Protection</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction. However, no method of 
                  transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section className="bg-card border border-border rounded-xl p-6 sm:p-8">
                <h2 className="text-xl font-semibold text-foreground mb-4">Third-Party Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to third parties. 
                  We may use trusted third-party services to help us operate our website, but these parties 
                  are required to keep your information confidential.
                </p>
              </section>

              <section className="bg-card border border-border rounded-xl p-6 sm:p-8">
                <h2 className="text-xl font-semibold text-foreground mb-4">Your Rights</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of any inaccurate information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt out of any marketing communications</li>
                  </ul>
                </div>
              </section>

              <section className="bg-card border border-border rounded-xl p-6 sm:p-8">
                <h2 className="text-xl font-semibold text-foreground mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at{" "}
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

export default Privacy;
