"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Mail, ArrowRight } from "lucide-react";
import ScrollLink from "./ScrollLink";

export default function Hero({
  name = "Mohammad Nab",
  role = "Next.js & MERN Stack Developer",
  pitch = "I design and build fast, accessible, and SEO‑ready web apps that ship business results.",
}: {
  name?: string;
  role?: string;
  pitch?: string;
}) {
  return (
    <section id="hero" className="md:px-12 px-2 pt-32">
      <div className="mx-auto w-4xl text-center">
        <h1 className="my-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
          Building high‑quality web apps with{" "}
          <span className="underline decoration-[#0c4f57] underline-offset-4">
            Next.js
          </span>{" "}
          and the MERN stack
        </h1>
        <div className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm text-muted-foreground">
          <span
            className="h-2 w-2 rounded-full bg-[#0c4f57]"
            aria-hidden="true"
          />
          Available for new projects
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          {pitch}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button className="bg-[#0c4f57] hover:bg-[#093b41]" asChild size="lg">
            <ScrollLink href="#projects">
              See projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </ScrollLink>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="mailto:mhmdnab004@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              Email me
            </Link>
          </Button>
          <Button asChild size="lg" variant="ghost">
            <Link
              href="https://github.com/mhmdnab"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          </Button>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[
            "Next.js",
            "React",
            "TypeScript",
            "Node.js",
            "Express",
            "MongoDB",
            "Tailwind",
          ].map((t) => (
            <Badge key={t} variant="secondary" className="rounded-full">
              {t}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
