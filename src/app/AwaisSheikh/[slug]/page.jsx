"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Page from "../page";
import guides from "../guides";

export default function DynamicSlug() {
  const params = useParams(); // Get dynamic route params
  const [activeSection, setActiveSection] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    const mapSlugToSection = (slug) => {
      const blogMatch = guides.find(
        (guide) => guide.title.toLowerCase().replace(/\s+/g, "-") === slug
      );

      if (blogMatch) {
        setActiveSection("MY_BLOG");
        setSelectedBlog(blogMatch);
        return;
      }

      const sectionMap = {
        "about-me": "ABOUT_ME",
        "my-work": "MY_WORK",
        resume: "RESUME",
        "contact-me": "CONTACT_ME",
        "my-blog": "MY_BLOG",
        reviews: "REVIEWS",
      };

      const mappedSection = sectionMap[slug] || "ABOUT_ME";
      setActiveSection(mappedSection);
      setSelectedBlog(null);
    };

    if (params?.slug) {
      const slug = params.slug.toLowerCase();
      mapSlugToSection(slug);
    } else {
      setActiveSection("ABOUT_ME");
    }
  }, [params?.slug]);

  if (!activeSection) return null;

  return <Page initialSection={activeSection} initialBlog={selectedBlog} />;
}