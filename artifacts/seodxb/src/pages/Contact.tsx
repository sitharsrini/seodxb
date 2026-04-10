import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  const [form, setForm] = React.useState({
    name: "",
    phone: "",
    email: "",
    url: "",
    message: "",
  });

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = `New enquiry from ${form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Company URL: ${form.url}`,
      "",
      form.message,
    ].join("\n");
    window.location.href = `mailto:hi@Listi.ae?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="pt-32 pb-24 container mx-auto px-4 max-w-6xl">
      <div className="grid lg:grid-cols-2 gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
          <h1 className="text-5xl md:text-6xl font-heading font-black mb-6">Let's start something great.</h1>
          <p className="text-xl text-muted-foreground mb-12">Whether you need to dominate traditional search, optimize for answer engines, or prepare for generative AI, we're here to help.</p>
          
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Email Us</p>
                <a href="mailto:hi@Listi.ae" className="text-lg font-bold hover:text-primary transition-colors">hi@Listi.ae</a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Call Us</p>
                <a href="tel:+971521551198" className="text-lg font-bold hover:text-primary transition-colors">+971 52 155 1198</a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Visit Us</p>
                <p className="text-lg font-bold">Dubai Design District, UAE</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-slate-50 border rounded-[2rem] p-8 md:p-10 shadow-xl"
        >
          <h3 className="text-2xl font-bold mb-8">Send us a message</h3>
          <form className="space-y-6" onSubmit={handleSubmit} noValidate={false}>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="contact-name" className="text-sm font-semibold">Name</label>
                <Input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={update("name")}
                  placeholder="John Doe"
                  className="bg-white py-6"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-phone" className="text-sm font-semibold">Contact number</label>
                <Input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  required
                  value={form.phone}
                  onChange={update("phone")}
                  placeholder="+971 50..."
                  className="bg-white py-6"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="contact-email" className="text-sm font-semibold">Email</label>
              <Input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={form.email}
                onChange={update("email")}
                placeholder="john@company.com"
                className="bg-white py-6"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="contact-url" className="text-sm font-semibold">Company URL</label>
              <Input
                id="contact-url"
                name="url"
                type="url"
                autoComplete="url"
                value={form.url}
                onChange={update("url")}
                placeholder="https://example.com"
                className="bg-white py-6"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="contact-message" className="text-sm font-semibold">Message</label>
              <Textarea
                id="contact-message"
                name="message"
                required
                value={form.message}
                onChange={update("message")}
                placeholder="How can we help you?"
                className="bg-white min-h-[150px] resize-none text-base p-4"
              />
            </div>
            <Button
              type="submit"
              className="w-full rounded-full bg-primary hover:bg-primary/90 text-white mt-4 py-7 text-lg font-bold shadow-lg shadow-primary/25 transition-all hover:scale-[1.02]"
            >
              Book A Call
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
