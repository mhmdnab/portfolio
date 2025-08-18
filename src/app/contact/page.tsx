"use client";

import React, { useState } from "react";
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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    setFeedbackMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setFeedbackMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Clear form
      } else {
        setStatus("error");
        setFeedbackMessage(
          data.error || "Failed to send message. Please try again."
        );
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
      setFeedbackMessage(
        "An unexpected error occurred. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-28 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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
          {/* Contact Info Card */}
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
                <div>
                  <label htmlFor="name" className="sr-only">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="py-6"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="py-6"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="min-h-[120px] py-4"
                  />
                </div>
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
