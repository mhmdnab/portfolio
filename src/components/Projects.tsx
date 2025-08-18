"use client";

import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";
import {
  projects as defaultProjects,
  categories,
  type Project,
} from "@/lib/projects";

export default function ProjectsGrid({
  className = "",
  projects = defaultProjects,
}: {
  className?: string;
  projects?: Project[];
}) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const groupedProjects =
    activeCategory === "all"
      ? categories.reduce((acc, cat) => {
          acc[cat.id] = projects.filter((p) => p.category === cat.id);
          return acc;
        }, {} as Record<string, Project[]>)
      : { [activeCategory]: filteredProjects };

  return (
    <section id="projects" className={cn(className)}>
      {/* Header */}
      <div className="text-center">
        <p className="text-xl tracking-widest uppercase text-[#0c4f57]">
          Projects
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          What I have built
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
          Here is a selection of projects from my portfolio that demonstrate a
          breadth of frontend and backend work across various frameworks. Please
          feel free to explore my{" "}
          <a
            href="https://www.github.com/mhmdnab"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#147b86]"
          >
            GitHub
          </a>{" "}
          for additional examples of my work.
        </p>
      </div>

      {/* Category Filter */}
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={() => setActiveCategory("all")}
          className={cn(
            "rounded-full px-6 py-2 text-sm font-medium transition-all duration-200",
            activeCategory === "all"
              ? "bg-[#0c4f57] text-white shadow-lg"
              : "bg-white text-[#0c4f57] border border-[#0c4f57] hover:bg-[#0c4f57] hover:text-white"
          )}
        >
          All Projects
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActiveCategory(cat.id)}
            className={cn(
              "rounded-full px-6 py-2 text-sm font-medium transition-all duration-200",
              activeCategory === cat.id
                ? "bg-[#0c4f57] text-white shadow-lg"
                : "bg-white text-[#0c4f57] border border-[#0c4f57] hover:bg-[#0c4f57] hover:text-white"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Projects */}
      <div className="mt-12">
        {Object.entries(groupedProjects).map(
          ([categoryId, categoryProjects]) => {
            if (categoryProjects.length === 0) return null;

            const categoryLabel =
              categories.find((c) => c.id === categoryId)?.label || categoryId;

            return (
              <div key={categoryId} className="mb-16">
                {activeCategory === "all" && (
                  <h3 className="mb-8 text-2xl font-bold text-[#0c4f57]">
                    {categoryLabel}
                  </h3>
                )}

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  {categoryProjects.map((project) => (
                    <Card
                      key={project.title}
                      className="group overflow-hidden border-0 shadow-xl shadow-gray-400 hover:shadow-[#0ea2b3] transition-all duration-200 hover:scale-105"
                    >
                      <Link
                        href={project.href || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <div className="relative aspect-[16/10] w-full overflow-hidden">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title + " preview"}
                            fill
                            sizes="(min-width: 768px) 50vw, 100vw"
                            className="object-cover transition-opacity duration-200 group-hover:opacity-10"
                          />
                          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-[#147b86] to-[#055b64] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                            <h3 className="text-center text-lg font-semibold text-white tracking-wider md:text-xl">
                              {project.title}
                            </h3>
                            <p className="mt-2 px-4 text-center text-sm text-white md:text-base">
                              {project.tags.join(", ")}
                            </p>
                            <ExternalLink className="mt-3 h-5 w-5 text-white" />
                          </div>
                        </div>
                      </Link>

                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-sm">
                          {project.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="pb-3">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="rounded-full text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>

                      <CardFooter className="pt-0">
                        <div className="flex gap-2">
                          {project.href && (
                            <Button
                              asChild
                              size="sm"
                              className="bg-[#0c4f57] hover:bg-[#147b86]"
                            >
                              <Link
                                href={project.href}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Live Site
                              </Link>
                            </Button>
                          )}
                          {project.repo && (
                            <Button asChild size="sm" variant="outline">
                              <Link
                                href={project.repo}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <Github className="mr-2 h-4 w-4" />
                                Code
                              </Link>
                            </Button>
                          )}
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            );
          }
        )}
      </div>

      {filteredProjects.length === 0 && (
        <p className="mt-10 text-center text-muted-foreground">
          No projects found.
        </p>
      )}
    </section>
  );
}
