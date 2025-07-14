import NewsletterForm from "@/components/ui/NewsletterForm";
import { MailCheck, TrendingUp, Award } from "lucide-react";

const Newsletter = () => {
  return (
    <section
      id="waitlist"
      className="py-24 bg-gradient-to-r from-primary/5 via-white to-primary/5 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/10 to-indigo-300/10 rounded-full blur-3xl"></div>

      {/* Custom CSS for grid pattern */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .bg-grid-pattern {
            background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          }
        `,
        }}
      />
    </section>
  );
};

export default Newsletter;
