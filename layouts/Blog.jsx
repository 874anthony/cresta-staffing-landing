"use client";
import MotionSection from "@/components/MotionSection";

import HeroBlog from "@/views/blog/sections/Hero";
import Posts from "@/views/blog/sections/Posts";
import SeparatorBlog from "@/views/blog/sections/Separator";

export default function BlogPage() {
  return (
    <main style={{ overflow: "hidden" }}>
      <HeroBlog />

      <MotionSection>
        <Posts />
      </MotionSection>

      <MotionSection delay={0.3}>
        <SeparatorBlog />
      </MotionSection>
    </main>
  );
}
