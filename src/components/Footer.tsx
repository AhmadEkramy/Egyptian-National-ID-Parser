import { Lang, t } from "@/lib/translations";
import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";

const Footer = ({ lang }: { lang: Lang }) => {
  const socialLinks = [
    {
      icon: <Facebook className="w-5 h-5" />,
      href: "https://www.facebook.com/ahmed.ekramy.343411?rdid=cwjrFc2wlAlqJtR6&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16iD6otQMv%2F#",
      label: "Facebook",
      hoverColor: "hover:text-[#1877F2] hover:border-[#1877F2]/40"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://www.instagram.com/_ahmedekramy/",
      label: "Instagram",
      hoverColor: "hover:text-[#E4405F] hover:border-[#E4405F]/40"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/ahmadekrami/",
      label: "LinkedIn",
      hoverColor: "hover:text-[#0A66C2] hover:border-[#0A66C2]/40"
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      href: "https://wa.me/201094543689",
      label: "WhatsApp",
      hoverColor: "hover:text-[#25D366] hover:border-[#25D366]/40"
    },
  ];

  return (
    <footer className="w-full mt-auto py-10 border-t border-white/5 bg-background/60 backdrop-blur-xl relative z-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-sm font-bold tracking-[0.1em] gold-gradient-text uppercase">
            {t("footer", lang)}
          </p>
          <p className="text-xs text-muted-foreground/50 font-medium">
            © {new Date().getFullYear()} Ahmed Ekramy • Designed for Excellence
          </p>
        </div>

        <div className="flex items-center gap-5">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-2xl bg-white/5 border border-white/10 text-muted-foreground transition-all duration-500 hover:scale-110 hover:bg-white/10 ${link.hoverColor} group relative overflow-hidden`}
              aria-label={link.label}
            >
              <div className="relative z-10 transition-transform duration-500 group-hover:rotate-[10deg] group-hover:scale-110">
                {link.icon}
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
