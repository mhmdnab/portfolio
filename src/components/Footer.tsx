import { Cedarville_Cursive } from "next/font/google";
import Link from "next/link";
import { Button } from "./ui/button";
import { ExternalLink, Github, Mail, Instagram } from "lucide-react";
import ScrollLink from "./ScrollLink";

const cc = Cedarville_Cursive({ subsets: ["latin"], weight: "400" });
const Footer = () => {
  return (
    <footer className="mt-14 border-t py-8 px-5 md:px-12 text-sm text-muted-foreground">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p>{new Date().getFullYear()} © Mohammad Nab. All rights reserved.</p>
        <div className="flex items-center gap-2 sm:gap-3">
          <Button asChild variant="ghost" size="sm">
            <Link href="mailto:mhmdnab004@gmail.com" aria-label="Email">
              <Mail className="h-4 w-4 sm:mr-2" />
              <span className="hidden sm:inline">Email</span>
            </Link>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link
              href="https://github.com/mhmdnab"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4 sm:mr-2" />
              <span className="hidden sm:inline">GitHub</span>
            </Link>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link
              href="https://instagram.com/mhmdnabdev"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4 sm:mr-2" />
              <span className="hidden sm:inline">Instagram</span>
            </Link>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <ScrollLink href="#projects" aria-label="See projects">
              <ExternalLink className="h-4 w-4 sm:mr-2" />
              <span className="hidden sm:inline">Projects</span>
            </ScrollLink>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
