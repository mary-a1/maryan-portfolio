import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";

export const metadata = {
  title: "Insights & Case Studies",
  description:
    "Product thinking, UX decisions, and lessons learned from building real-world applications.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section className="max-w-3xl mx-auto py-16">
      {/* Header */}
      <BlurFade delay={BLUR_FADE_DELAY}>
        <header className="mb-10 space-y-3">
          <h1 className="text-4xl font-bold tracking-tight">
            Insights & Case Studies
          </h1>
          {/* <p className="text-muted-foreground text-lg">
            Writing about product decisions, UX trade-offs, and lessons learned
            while building real-world applications.
          </p> */}
          <p className="text-sm accent-foreground">This space includes in-depth case studies, as well as written reflections on how I approach product and systems design 😊 </p>
        </header>
      </BlurFade>

      {/* Posts */}
      <div className="space-y-4">
        {posts
          .map((post, id) => (
            <BlurFade
              delay={BLUR_FADE_DELAY * 2 + id * 0.05}
              key={post.slug}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group block rounded-xl border border-border p-5 transition
                           hover:border-primary/50 hover:bg-muted/40"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    {/* Optional Featured Badge */}
                    {post.metadata.featured && (
                      <span className="inline-block mb-1 rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">
                        Featured Case Study
                      </span>
                    )}

                    <h2 className="text-lg font-semibold tracking-tight group-hover:underline">
                      {post.metadata.title}
                    </h2>

                    {post.metadata.description && (
                      <p className="text-sm text-muted-foreground">
                        {post.metadata.description}
                      </p>
                    )}

                    <span className="text-sm text-primary">
                      {post.metadata.type === "case-study"
                        ? "Read case study →"
                        : "Read insight →"}
                    </span>
                  </div>
                </div>
              </Link>
            </BlurFade>
          ))}
      </div>
    </section>
  );
}
