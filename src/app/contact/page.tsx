"use client";

import React, { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  Loader2,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Script from "next/script";

declare global {
  interface Window {
    turnstile?: {
      render: (
        element: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "error-callback"?: () => void;
        }
      ) => void;
    };
  }
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [token, setToken] = useState<string>("");
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  const turnstileRef = useRef<HTMLDivElement>(null);

  // 🧩 Load Turnstile widget only after the script is ready
  useEffect(() => {
    if (!isScriptLoaded || !turnstileRef.current) return;

    // Add a small delay for mobile stability
    const timeout = setTimeout(() => {
      if (window.turnstile) {
        window.turnstile.render(turnstileRef.current!, {
          sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!,
          callback: (token: string) => {
            console.log("✅ Turnstile token generated:", token);
            setToken(token);
          },
          "error-callback": () => {
            console.error("❌ Turnstile failed to load");
          },
        });
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [isScriptLoaded]);

  // 📨 Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    setFeedbackMessage("");

    try {
      if (!token) throw new Error("Missing Turnstile verification token");

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, token }),
      });

      const data = (await res.json()) as { success: boolean; error?: string };
      console.log("📨 Contact response:", data);

      if (data.success) {
        setStatus("success");
        setFeedbackMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(data.error || "Email sending failed");
      }
    } catch (error) {
      console.error("❌ Contact form error:", error);
      setStatus("error");
      setFeedbackMessage(
        "Failed to send your message. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-28 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <p className="text-xl tracking-widest uppercase text-[#0c4f57]">
            Get in Touch
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Contact Me
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Have a project in mind or just want to say hello? Fill out the form
            below or reach out through other channels.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Contact Info */}
          <Card className="flex flex-col justify-between p-6 shadow-lg">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-2xl font-bold text-[#0c4f57]">
                Direct Contact
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow space-y-6 px-0 text-muted-foreground">
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-[#0c4f57]" />
                <div>
                  <p className="font-semibold">Email</p>
                  <Link
                    href="mailto:mhmdnab004@gmail.com"
                    className="hover:underline"
                  >
                    mhmdnab004@gmail.com
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-[#0c4f57]" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p>+961 3 421402</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="h-6 w-6 text-[#0c4f57]" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p>Tripoli, Lebanon</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="p-6 shadow-lg">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-2xl font-bold text-[#0c4f57]">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  required
                  className="py-6"
                />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  required
                  className="py-6"
                />
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  required
                  rows={6}
                  className="min-h-[120px] py-4"
                />

                {/* ✅ Turnstile container */}
                <div
                  ref={turnstileRef}
                  className="cf-turnstile min-h-[70px] flex justify-center items-center"
                />

                {/* ✅ Load Turnstile script */}
                <Script
                  id="turnstile-script"
                  src="https://challenges.cloudflare.com/turnstile/v0/api.js"
                  strategy="afterInteractive"
                  onLoad={() => setIsScriptLoaded(true)}
                />

                {/* Submit button */}
                <Button
                  type="submit"
                  className="w-full py-6 text-lg bg-[#0c4f57] hover:bg-[#147b86]"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>

                {/* Status message */}
                {status && (
                  <div
                    className={cn(
                      "mt-4 flex items-center gap-2 rounded-md p-3 text-sm",
                      status === "success"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    )}
                    role="alert"
                  >
                    {status === "success" ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : (
                      <XCircle className="h-5 w-5" />
                    )}
                    {feedbackMessage}
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
