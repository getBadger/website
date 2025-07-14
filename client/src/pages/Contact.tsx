import ContactForm from "@/components/ui/ContactForm";
import NewsletterForm from "@/components/ui/NewsletterForm";
import { Helmet } from "react-helmet";
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";
import { SiTiktok } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Get in Touch</title>
        <meta
          name="description"
          content="Contact the getBadger team for questions about our affiliate marketing and online shopping tools. Subscribe to our newsletter for updates."
        />
      </Helmet>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-extrabold text-neutral-900">
                Get in Touch
              </h2>
              <p className="mt-4 text-lg text-neutral-500">
                Have questions about our tools for affiliate marketers and
                online shoppers? Contact us for more information or to schedule
                a demo.
              </p>

              <ContactForm />
            </div>

            {/* Newsletter & Info */}
            <div className="mt-12 lg:mt-0">
              <div className="bg-gray-50 rounded-lg shadow-sm p-8">
                <h3 className="text-2xl font-bold text-neutral-900">
                  Stay Updated
                </h3>
                <p className="mt-4 text-lg text-neutral-500">
                  Subscribe to our newsletter for the latest tips for affiliate
                  marketers, product updates, and industry insights.
                </p>

                <NewsletterForm />

                <div className="mt-10">
                  <h4 className="text-lg font-medium text-neutral-900 mb-4">
                    Contact Information
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Mail className="text-primary mr-3 h-5 w-5" />
                      <span className="text-neutral-500">
                        hello@getbadger.net
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="text-primary mr-3 h-5 w-5" />
                      <span className="text-neutral-500">
                        +1 (470) 781-6433
                      </span>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="text-primary mr-3 h-5 w-5 mt-1" />
                      <span className="text-neutral-500">
                        235 Mitchell St SW Suite 355
                        <br />
                        Atlanta, GA 30303
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-medium text-neutral-900 mb-4">
                    Follow Us
                  </h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.instagram.com/getbadger/"
                      className="text-neutral-500 hover:text-primary"
                    >
                      <span className="sr-only">Instagram</span>
                      <Instagram className="h-6 w-6" />
                    </a>
                    <a
                      href="https://www.tiktok.com/@getbadger.net"
                      className="text-neutral-500 hover:text-primary"
                    >
                      <span className="sr-only">Tiktok</span>
                      <SiTiktok className="h-6 w-6" />
                    </a>
                    <a
                      href="https://x.com/_GetBadger"
                      className="text-neutral-500 hover:text-primary"
                    >
                      <span className="sr-only">Twitter</span>
                      <Twitter className="h-6 w-6" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/getbadgernet"
                      className="text-neutral-500 hover:text-primary"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <Linkedin className="h-6 w-6" />
                    </a>
                    <a
                      href="https://www.facebook.com/get.badger/"
                      className="text-neutral-500 hover:text-primary"
                    >
                      <span className="sr-only">Facebook</span>
                      <Facebook className="h-6 w-6" />
                    </a>
                    {/* <a href="#" className="text-neutral-500 hover:text-primary">
                      <span className="sr-only">Instagram</span>
                      <Instagram className="h-6 w-6" />
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
