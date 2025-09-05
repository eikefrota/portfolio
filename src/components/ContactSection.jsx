import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Github, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        setTimeout(() => {
            toast({
                title: "Message sent!",
                description: "Thank you for your message. I'll get back to you soon.",
            });
            setIsSubmitting(false);
            e.target.reset();
        }, 1500);


    };
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out.
                    I'm always open to discussing new opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-10">
                            Contact Information
                        </h3>

                        <div className="space-y-6 flex flex-col items-center justify-center gap-5">
                            <div className="flex items-start space-x-4 w-full max-w-xs mx-auto">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div className="flex flex-col items-center text-center w-full">
                                    <h4 className="font-medium">Email</h4>
                                    <a
                                        href="mailto:eikefrotaa@hotmail.com"
                                        className="text-lg text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        eikefrotaa@hotmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4 w-full max-w-xs mx-auto">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div className="flex flex-col items-center text-center   w-full">
                                    <h4 className="font-medium">Phone</h4>
                                    <a
                                        href="tel:+11234567890"
                                        className="text-lg text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        +55 (85) 99906-2339
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4 w-full max-w-xs mx-auto">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div className="flex flex-col items-center text-center w-full">
                                    <h4 className="font-medium">Location</h4>
                                    <a className="text-lg text-muted-foreground hover:text-primary transition-colors">
                                        Fortaleza, CE, Brazil
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="text-xl font-medium mb-8"> Connect With Me</h4>
                            <div className="flex space-x-8 justify-center">
                                <a
                                    href="https://www.linkedin.com/in/eikefrota/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className="group transition-transform duration-200"
                                >
                                    <Linkedin className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors duration-300 group-hover:scale-110 group-hover:-translate-y" />
                                </a>
                                <a
                                    href="https://github.com/eikefrota"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                    className="group transition-transform duration-200"
                                >
                                    <Github className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors duration-300 group-hover:scale-110 group-hover:-translate-y" />
                                </a>
                                <a
                                    href="https://wa.me/5585999062339"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="WhatsApp"
                                    className="group transition-transform duration-200"
                                >
                                    <MessageCircle className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors duration-300 group-hover:scale-110 group-hover:-translate-y" />
                                </a>
                                <a
                                    href="https://www.instagram.com/eikefrotaa/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    className="group transition-transform duration-200"
                                >
                                    <Instagram className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors duration-300 group-hover:scale-110 group-hover:-translate-y" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div
                        className="bg-card p-8 rounded-lg shadow-xs"
                        onSubmit={handleSubmit}
                    >
                        <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

                        <form className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium mb-2"
                                >
                                    {" "}
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                                    placeholder="Your Name..."
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium mb-2"
                                >
                                    {" "}
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                                    placeholder="example@gmail.com"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium mb-2"
                                >
                                    {" "}
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hello, I'd like to talk about..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2"
                                )}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
