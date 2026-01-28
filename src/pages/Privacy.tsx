
import { Layout } from "@/components/Layout";
import { Shield, Lock, Eye, Server, Trash2, Bell, Globe, FileText, Gavel, Database, Wifi } from "lucide-react";

const sections = [
  {
    icon: FileText,
    title: "Effective Date",
    content: `This Privacy Policy is effective as of April 1, 2026 and applies to all users of the Word of the Day – Vocabulary Builder mobile application (the \"App\"). By using the App, you agree to the collection and use of information in accordance with this policy.`,
  },
  {
    icon: Lock,
    title: "Information We Collect",
    content: `Word of the Day is built with a privacy‑first architecture. We do not require account registration and we do not collect personally identifiable information such as name, email address, phone number, precise location, IP address, or device identifiers. All vocabulary history, favorites, streaks, quiz progress, and preferences are stored locally on your device only.`,
  },
  {
    icon: Eye,
    title: "Use of Information",
    content: `Data generated within the App (including saved words, quiz results, streaks, and preferences) is used solely to provide core functionality of the service. We do not use your data for advertising, profiling, behavioral analysis, resale, or marketing purposes.`,
  },
  {
    icon: Server,
    title: "Third‑Party Services & Data Sharing",
    content: `The App accesses the internet only to retrieve daily vocabulary content and related linguistic information. We do not integrate advertising SDKs, analytics trackers, fingerprinting tools, or data brokerage services. No personal user data is transmitted to our servers or shared with third parties.`,
  },
  {
    icon: Wifi,
    title: "Offline Use & Cached Data",
    content: `Word of the Day supports offline access. Previously viewed words, favorites, and learning history are cached locally on your device so they remain available without an internet connection. Cached data never leaves your device unless you explicitly export or share it using your operating system’s tools.`,
  },
  {
    icon: Bell,
    title: "Notifications Permission",
    content: `If you enable reminders, the App may request notification permission to send local alerts reminding you to view your daily word. These notifications are optional and can be disabled at any time through your device settings. No notification data is transmitted externally.`,
  },
  {
    icon: Database,
    title: "Permissions Breakdown",
    content: `The App requests only the minimum permissions required to function: (1) Internet Access – to fetch the daily word and related content. (2) Notifications – to deliver optional daily reminders. The App does not request access to contacts, location, camera, microphone, storage, or device identifiers.`,
  },
  {
    icon: Trash2,
    title: "Data Storage & Deletion",
    content: `All application data is stored locally on your device. You may delete your saved words, history, and preferences at any time from within the App. Uninstalling the App permanently removes all stored data from your device. We do not maintain server‑side backups of personal data.`,
  },
  {
    icon: Gavel,
    title: "GDPR & CCPA Compliance",
    content: `For users in the European Economic Area (GDPR) and California (CCPA), you have the right to access, correct, delete, or restrict the use of your personal data. Because Word of the Day does not collect or process personally identifiable information on external servers, most requests are fulfilled by managing data locally within the App. You may delete all data at any time through the App or by uninstalling it. We do not sell personal information as defined by the CCPA.`,
  },
  {
    icon: Globe,
    title: "Children’s Privacy",
    content: `Word of the Day is intended for general audiences. We do not knowingly collect personal information from children under the age of 13. As no accounts or personal identifiers are collected, children may use the App safely under parental guidance.`,
  },
];

export default function PrivacyPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-2 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="container mx-auto px-4 relative z-10 max-w-3xl text-center">
          <div className="w-20 h-20 mx-auto rounded-2xl gradient-dawn flex items-center justify-center mb-8 shadow-soft">
            <Shield className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="font-display text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-lg text-muted-foreground">
            This Privacy Policy explains how Word of the Day – Vocabulary Builder collects, uses, and protects your information.
          </p>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          {sections.map((s) => (
            <div key={s.title} className="bg-card rounded-2xl p-8 shadow-card border">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-display text-xl font-semibold">{s.title}</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">{s.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Changes & Contact */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <FileText className="w-10 h-10 mx-auto mb-4 text-primary" />
          <h2 className="font-display text-2xl font-bold mb-4">Changes to This Policy</h2>
          <p className="text-muted-foreground mb-6">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised effective date. Continued use of the App after updates constitutes acceptance of the revised policy.
          </p>
          <p className="text-muted-foreground">
            For questions regarding this policy, contact us at <span className="text-primary">support@wordofday.app</span>.
          </p>
        </div>
      </section>
    </Layout>
  );
}
