"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  MapPin,
  Code,
  ExternalLink,
  Github,
  Mail,
} from "lucide-react";
import Link from "next/link";
import ScrollLink from "./ScrollLink";

const About = () => {
  const highlights = [
    { icon: Calendar, label: "Started", value: "2023" },
    { icon: MapPin, label: "Location", value: "Lebanon" },
    { icon: Code, label: "Focus", value: "Full-Stack" },
  ];

  const expertise = [
    "Frontend Development",
    "Backend APIs",
    "E-commerce Solutions",
    "Client Collaboration",
    "Wireframe to Production",
    "Performance Optimization",
  ];

  return (
    <section className="w-full py-16 lg:py-24" id="about">
      <div className="mx-auto max-w-6xl md:px-12 px-2">
        <div className="text-center">
          <p className="text-xl tracking-widest uppercase text-[#0c4f57]">
            About Me
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Who I Am
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Main Content */}
          <div className="space-y-6">
            <div className="prose prose-gray max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I specialize in building websites with front-end and back-end
                components that connect with APIs and other backend
                technologies. I am passionate about learning new technologies
                and expanding my understanding of this domain.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                While I am most proficient in building front-end applications
                using{" "}
                <span className="font-semibold text-[#0c4f57]">React</span> and{" "}
                <span className="font-semibold text-[#0c4f57]">Next.js</span>, I
                believe that being a great web developer is not about using one
                specific language, but about choosing the best tool for the job.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                I started web development in 2023, managing multiple e-commerce
                websites on different platforms. I have experience working
                directly with clients and taking mock wireframes all the way to
                deployed applications. In my spare time, I work on projects and
                learn more frameworks that are useful for this purpose.
              </p>
            </div>

            {/* Call to Action */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild className="bg-[#0c4f57] hover:bg-[#147b86]">
                <Link
                  href="https://www.github.com/mhmdnab"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View My Projects
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Link>
              </Button>
            </div>
          </div>

          {/* Stats & Info Cards */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card className="border-dashed border-[#0c4f57]/20">
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold text-[#0c4f57]">
                  Quick Facts
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
                  {highlights.map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0c4f57]/10">
                        <item.icon className="h-5 w-5 text-[#0c4f57]" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {item.label}
                        </p>
                        <p className="font-semibold">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Expertise Areas */}
            <Card className="border-dashed border-[#0c4f57]/20">
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold text-[#0c4f57]">
                  Areas of Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  {expertise.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="rounded-full bg-[#0c4f57]/10 text-[#0c4f57] hover:bg-[#0c4f57]/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Philosophy Card */}
            <Card className="border-l-4 border-l-[#0c4f57] bg-gradient-to-r from-[#0c4f57]/5 to-transparent">
              <CardContent className="p-6">
                <blockquote className="text-lg font-medium italic text-[#0c4f57]">
                  "Being a great web developer is not about using one specific
                  language, but about choosing the best tool for the job."
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-[#0c4f57]/10 to-[#147b86]/10 p-8 text-center">
          <h3 className="text-2xl font-bold text-[#0c4f57]">
            Ready to work together?
          </h3>
          <p className="mt-2 text-muted-foreground">
            I'm always interested in new opportunities and exciting projects.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[#0c4f57] hover:bg-[#147b86]"
            >
              <Link href="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Start a Conversation
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <ScrollLink href="#projects">
                <ExternalLink className="mr-2 h-5 w-5" />
                View My Work
              </ScrollLink>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
