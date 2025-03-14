import HeroBlog from "@/views/blog/sections/Hero";
import Posts from "@/views/blog/sections/Posts";
import SeparatorBlog from "@/views/blog/sections/Separator";

export default function BlogPage() {
  return (
    <main>
      <HeroBlog />

      <Posts />

      <SeparatorBlog />
    </main>
  );
}
