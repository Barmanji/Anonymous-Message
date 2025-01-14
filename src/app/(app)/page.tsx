import { Container, Icons, Wrapper } from "@/components";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { LampContainer } from "@/components/ui/lamp";
import Marquee from "@/components/ui/marquee";
import SectionBadge from "@/components/ui/section-badge";
import { features, perks, pricingCards, reviews } from "@/constants";
import { cn } from "@/lib/utils";
import { ArrowRight, ChevronRight, UserIcon, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {

    const firstRow = reviews.slice(0, reviews.length / 2);
    const secondRow = reviews.slice(reviews.length / 2);

    return (
        <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">


            {/* hero */}
            <Wrapper>
                <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[150vh]" />

                <Container>
                    <div className="flex flex-col items-center justify-center py-20 h-full">
                        <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
                            <span>
                                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                            </span>
                            <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
                            <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/40"></span>
                            <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1.5">
                                <Image src="/icons/sparkles-dark.svg" alt="✨" width={24} height={24} className="w-4 h-4" />
                                Introducing Anonymous Messenger
                                <ChevronRight className="w-4 h-4" />
                            </span>
                        </button>

                        <div className="flex flex-col items-center mt-8 max-w-3xl w-11/12 md:w-full">
                            <h1 className="text-4xl md:text-6xl lg:textxl md:!leading-snug font-semibold text-center bg-clip-text bg-gradient-to-b from-gray-50 to-gray-50 text-transparent">
Balancing Anonymity and Accountability
                            </h1>
                            <p className="text-base md:text-lg text-foreground/80 mt-6 text-center">
Empowering users to connect and communicate in a secure and anonymous environment
                            </p>
                            <div className="hidden md:flex relative items-center justify-center mt-8 md:mt-12 w-full">
                                <Link href="/sign-in" className="flex items-center justify-center w-max rounded-full border-t border-foreground/30 bg-white/20 backdrop-blur-lg px-2 py-1 md:py-2 gap-2 md:gap-8 shadow-3xl shadow-background/40 cursor-pointer select-none">
                                    <p className="text-foreground text-sm text-center md:text-base font-medium pl-4 pr-4 lg:pr-0">
                                        ✨ {"  "} Start Chatting!  </p>
                                    <Button size="sm" className="rounded-full hidden lg:flex border border-foreground/20">
                                        Get Started
                                        <ArrowRight className="w-4 h-4 ml-1" />
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div className="relative flex items-center py-10 md:py-20 w-full">
                            <div className="absolute top-1/2 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-3/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>
                            <div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
                                <Image
                                    src="/assets/1.png"
                                    alt="banner image"
                                    width={1200}
                                    height={1200}
                                    quality={100}
                                    className="rounded-md lg:rounded-xl bg-foreground/10 shadow-2xl ring-1 ring-border"
                                />

                                <BorderBeam size={250} duration={12} delay={9} />
                            </div>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* how it works */}
            <Wrapper className="flex flex-col items-center justify-center py-12 relative">
                <Container>
                    <div className="max-w-md mx-auto text-start md:text-center">
                        <SectionBadge title="The Process" />
                        <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
                                Send Amazing Messages.
                        </h2>
                        <p className="text-muted-foreground mt-6">
                            Turn your thoughts into reality in just 3 simple steps
                        </p>
                    </div>
                </Container>
                <Container>
                    <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full divide-x-0 md:divide-x divide-y md:divide-y-0 divide-gray-900 first:border-l-2 lg:first:border-none first:border-gray-900">
                            {perks.map((perk) => (
                                <div key={perk.title} className="flex flex-col items-start px-4 md:px-6 lg:px-8 lg:py-6 py-4">
                                    <div className="flex items-center justify-center">
                                        <perk.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-lg font-medium mt-4">
                                        {perk.title}
                                    </h3>
                                    <p className="text-muted-foreground mt-2 text-start lg:text-start">
                                        {perk.info}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* features */}
            <Wrapper className="flex flex-col items-center justify-center py-12 relative">
                <div className="hidden md:block absolute top-0 -right-1 w-72 h-72 bg-primary rounded-full blur-[10rem] -z-10"></div>
                <div className="hidden md:block absolute bottom-0 -left-0 w-72 h-72 bg-indigo-600 rounded-full blur-[10rem] -z-10"></div>
                <Container>
                    <div className="max-w-md mx-auto text-start md:text-center">
                        <SectionBadge title="Features" />
                        <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
                            Discover our powerful features
                        </h2>
                        <p className="text-muted-foreground mt-6">
                            We offers a range of features to help you choose and send messages in no time
                        </p>
                    </div>
                </Container>
                <Container>
                    <div className="flex items-center justify-center mx-auto mt-8">
                        <Icons.feature className="w-auto h-80" />
                    </div>
                </Container>
                <Container>
                    <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
                            {features.map((feature) => (
                                <div key={feature.title} className="flex flex-col items-start lg:items-start px-0 md:px-0">
                                    <div className="flex items-center justify-center">
                                        <feature.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-lg font-medium mt-4">
                                        {feature.title}
                                    </h3>
                                    <p className="text-muted-foreground mt-2 text-start lg:text-start">
                                        {feature.info}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Wrapper>



            {/* testimonials */}
            <Wrapper className="flex flex-col items-center justify-center py-12 relative">
                <div className="hidden md:block absolute -top-1/4 -left-0 w-72 h-72 bg-indigo-500 rounded-full blur-[10rem] -z-10"></div>
                <Container>
                    <div className="max-w-md mx-auto text-start md:text-center">
                        <SectionBadge title="Our Customers" />
                        <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
                            What people are saying
                        </h2>
                        <p className="text-muted-foreground mt-6">
                            See how Anonymous Messenger empowers businesses of all sizes. Here&apos;s what real people are saying.                        </p>
                    </div>
                </Container>
                <Container>
                    <div className="py-10 md:py-20 w-full">
                        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-10">
                            <Marquee pauseOnHover className="[--duration:20s] select-none">
                                {firstRow.map((review) => (
                                    <figure
                                        key={review.name}
                                        className={cn(
                                            "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                                            "border-zinc-50/[.1] bg-background over:bg-zinc-50/[.15]",
                                        )}
                                    >
                                        <div className="flex flex-row items-center gap-2">
                                            <UserIcon className="w-6 h-6" />
                                            <div className="flex flex-col">
                                                <figcaption className="text-sm font-medium">
                                                    {review.name}
                                                </figcaption>
                                                <p className="text-xs font-medium text-muted-foreground">{review.username}</p>
                                            </div>
                                        </div>
                                        <blockquote className="mt-2 text-sm">{review.body}</blockquote>
                                    </figure>
                                ))}
                            </Marquee>
                            <Marquee reverse pauseOnHover className="[--duration:20s] select-none">
                                {secondRow.map((review) => (
                                    <figure
                                        key={review.name}
                                        className={cn(
                                            "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                                            "border-zinc-50/[.1] bg-background over:bg-zinc-50/[.15]",
                                        )}
                                    >
                                        <div className="flex flex-row items-center gap-2">
                                            <UserIcon className="w-6 h-6" />
                                            <div className="flex flex-col">
                                                <figcaption className="text-sm font-medium">
                                                    {review.name}
                                                </figcaption>
                                                <p className="text-xs font-medium text-muted-foreground">{review.username}</p>
                                            </div>
                                        </div>
                                        <blockquote className="mt-2 text-sm">{review.body}</blockquote>
                                    </figure>
                                ))}
                            </Marquee>
                            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
                            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* newsletter */}
            <Wrapper className="flex flex-col items-center justify-center py-12 relative">
                <Container>
                    <LampContainer>
                        <div className="flex flex-col items-center justify-center relative w-full text-center">
                            <h2 className="text-4xl lg:text-5xl xl:text-6xl lg:!leading-snug font-semibold mt-8">
                                From Message to Delivery
                            </h2>
                            <p className="text-muted-foreground mt-6 max-w-md mx-auto">
                                Craft Meaningful Interactions with AI-Driven Suggestions
                            </p>
                            <Button variant="white" className="mt-6" asChild>
                                <Link href="/sign-in">
                                    Get started for free
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </Button>
                        </div>
                    </LampContainer>
                </Container>
                <Container className="relative z-[999999]">
                    <div className="flex items-center justify-center w-full -mt-40">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between w-full px-4 md:px-8 rounded-lg lg:rounded-2xl border border-border/80 py-4 md:py-8">
                            <div className="flex flex-col items-start gap-4 w-full">
                                <h4 className="text-xl md:text-2xl font-semibold">
                                    Made By ABESITians
                                </h4>
                                <p className="text-base text-muted-foreground">
                                    Aditya, Advait, Anshika, Ajay
                                </p>
                            </div>
                            <div className="flex flex-col items-start gap-2 md:min-w-80 mt-5 md:mt-0 w-full md:w-max">

                                <p className="text-xs text-muted-foreground">
                                   Make your dashboard!{" "}
                                    <Link href="#">
                                        Privacy Policy
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Wrapper>

        </section>
    )
};

export default HomePage
