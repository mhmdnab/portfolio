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
        <div className="flex items-center gap-3">
          <Button asChild variant="ghost" size="sm">
            <Link href="mailto:mhmdnab004@gmail.com" aria-label="Email">
              <Mail className="mr-2 h-4 w-4" />
              Email
            </Link>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link
              href="https://github.com/mhmdnab"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link
              href="https://instagram.com/mhmdnabdev"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="mr-2 h-4 w-4" />
              Instagram
            </Link>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <ScrollLink href="#projects" aria-label="See projects">
              <ExternalLink className="mr-2 h-4 w-4" />
              Projects
            </ScrollLink>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
