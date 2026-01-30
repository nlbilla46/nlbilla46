
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";


const Publications = () => {
  const [publicationsHtml, setPublicationsHtml] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPublications = () => {
      const link = "https://purexml-open.ewi.tudelft.nl/direct/tu/group/bae30032-1ecb-46c4-8efb-ed9e7251d281";
      const xhttp = new XMLHttpRequest();
      const page = window.location.search;

      xhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
          if (this.status === 200) {
            try {
              const parser = new DOMParser();
              const doc = parser.parseFromString(this.responseText, "text/html");
              const container = document.createElement("div");
              const all_p = doc.getElementsByTagName("p");
              const u_list = document.createElement("ul");
              u_list.className = "space-y-1";

              // Iterate over HTMLCollection using the user's logic style but safe for TS
              for (let i = 0; i < all_p.length; i++) {
                if (all_p[i].innerHTML !== undefined) {
                  const d = document.createElement("li");
                  d.innerHTML = all_p[i].innerHTML;
                  d.className = "p-2 bg-card text-card-foreground rounded-s border border-border/30 shadow-sm hover:shadow-md transition-all duration-200";
                  u_list.appendChild(d);
                }
              }

              container.append(u_list);
              const nav_items = doc.getElementsByClassName("pagination-block")[0];
              if (nav_items !== undefined) {
                container.append(doc.getElementsByClassName("pagination-block")[0]);
              }

              setPublicationsHtml(container.innerHTML);
              setLoading(false);
            } catch (err) {
              console.error("Error parsing publications:", err);
              setError("Failed to parse publications.");
              setLoading(false);
            }
          } else {
            console.error("Failed to fetch publications, status:", this.status);
            setError("Failed to load publications. Please try again later.");
            setLoading(false);
          }
        }
      };

      xhttp.open("GET", link + page, true);
      xhttp.send();
    };

    fetchPublications();
  }, []);

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Research Publications
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Explore our latest research contributions in distributed systems, blockchain technology,
            machine learning, and cloud computing.
          </p>
        </div>

        <div className="grid gap-8">
          {loading && (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4 text-muted-foreground">Loading publications...</p>
            </div>
          )}



          {error && (
            <div className="text-center py-12 text-destructive">
              <p>{error}</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => window.location.reload()}
              >
                Retry
              </Button>
            </div>
          )}

          {!loading && !error && (
            <div
              id="publicationlist"
              className="prose prose-invert max-w-none [&_a]:text-primary [&_a]:underline [&_a]:decoration-primary/30 [&_a:hover]:decoration-primary [&_a]:transition-colors"
              dangerouslySetInnerHTML={{ __html: publicationsHtml }}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Publications;