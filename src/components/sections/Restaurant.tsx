"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { restaurant } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Restaurant() {
  const [openId, setOpenId] = useState<string | null>(
    restaurant.chapters[0]?.id ?? null,
  );

  return (
    <section id="restaurante" className="relative bg-cream py-24 md:py-32">
      <div className="patagonia-grain pointer-events-none absolute inset-0 opacity-[0.12]" />

      <div className="relative mx-auto max-w-3xl px-5 md:px-8">
        <SectionHeading
          eyebrow={restaurant.eyebrow}
          title={restaurant.title}
          description={restaurant.description}
        />

        <Reveal className="mt-14">
          <div className="divide-y divide-charcoal/10 border-y border-charcoal/10">
            {restaurant.chapters.map((chapter, chapterIndex) => {
              const isOpen = openId === chapter.id;

              return (
                <div key={chapter.id} id={`menu-${chapter.id}`} className="scroll-mt-28">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenId(isOpen ? null : chapter.id)
                    }
                    className="flex w-full items-center justify-between gap-4 py-5 text-left transition hover:text-earth md:py-6"
                    aria-expanded={isOpen}
                    data-cursor="hover"
                  >
                    <span className="min-w-0">
                      <span className="block text-[10px] uppercase tracking-[0.28em] text-earth">
                        0{chapterIndex + 1}
                      </span>
                      <span className="mt-1 block font-display text-2xl text-charcoal md:text-3xl">
                        {chapter.title}
                      </span>
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 text-earth transition-transform duration-300",
                        isOpen && "rotate-180",
                      )}
                    />
                  </button>

                  <div
                    className={cn(
                      "grid transition-[grid-template-rows] duration-300 ease-out",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-8">
                        <p className="max-w-2xl text-sm leading-relaxed text-charcoal/60 md:text-base">
                          {chapter.intro}
                        </p>

                        <div className="mt-6 space-y-6">
                          {chapter.categories.map((category) => (
                            <div key={category.name || chapter.id}>
                              {category.name ? (
                                <h4 className="mb-3 font-display text-lg text-earth md:text-xl">
                                  {category.name}
                                </h4>
                              ) : null}

                              <ul className="space-y-3">
                                {category.items.map((item) => (
                                  <li
                                    key={item.name}
                                    className="border-l border-charcoal/15 pl-4"
                                  >
                                    <p className="font-display text-base text-charcoal md:text-lg">
                                      {item.name}
                                    </p>
                                    <p className="mt-0.5 text-sm leading-snug text-charcoal/55">
                                      {item.description}
                                    </p>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal className="mt-12 flex justify-center">
          <Button href={restaurant.cta.href} variant="outline">
            {restaurant.cta.label}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
