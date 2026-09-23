import { ArrowUpRight } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { AnimatedBorderButton } from "@/components/animatedBorderButton"

const projects = [
    {
        title: 'SwapZone – Student Campus Marketplace',
        description: `
        Developed a full-stack student marketplace using React, Node.js, Express.js, and MongoDB with authentication, item listings, search, filtering, wishlist, and swap features.

        Implemented REST APIs, JWT-based protected routes, image uploads, and responsive UI for a seamless campus buying and selling experience.
        `,
        image: "/project.1.png",
        tags: [ "ReactJs", "ExpressJs", "MongoDB"],
        link: "https://swapzone-1-z61x.onrender.com",
        github: "https://github.com/shivashankar9346/SwapZone"
    },
    {
        title: 'Event Management System | MERN Stack',
        description: `
        Developed a full-stack event management platform using React, Node.js, Express.js, and MongoDB to create, search, and manage events with category filtering and pagination.

        Implemented event registration and attendance tracking with seat availability management and RESTful APIs for efficient data handling.
        `,
        image: "/project.2.jpeg",
        tags: [ "ReactJs", "ExpressJs", "MongoDB"],
        link: "https://event-management-system-frontend-fl0q.onrender.com",
        github: "https://github.com/shivashankar9346/Event-Management-System"
    },
    {
        title: 'CleanOps – Waste Management Platform',
        description: `
        Developed a responsive frontend using React.js for reporting and managing waste collection requests with a clean, user-friendly interface.

        Implemented reusable components, role-based UI, form handling, request tracking, and responsive layouts for citizens, operators, and admins.
        `,
        image: "/project.3.png",
        tags: ["Html", "Css", "Javascript", "React"],
        link: "https://cleanops-efficient-operater-project.netlify.app/",
        github: "https://github.com/shivashankar9346/cleanOps-project"
    }
]

export const Projects = () => {
    return (
        <section id="projects" className=" py-20 relative overflow-hidden">
            {/* Background glows */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-0 w-64 bg-highlight/5 rounded-full blur-3xl"></div>
            <div className="container mx-auto px-6 relative z-10">
                {/* section header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-lg md:text-4xl font-semibold  foot-medium tracking-wider uppercase textalign-center ">Featured Works</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground"> project that
                        <span className="font-serif italic font-normal text-white"> {" "}
                            make an impact.
                        </span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animated-delay-200">
                        A Selection of my recent work , from complex web applications
                        to innovative tools that solve real-world problems.
                    </p>
                </div>
                {/* projects grdi */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                            style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                        >
                            {/* image */}
                            <div className="relative overflow-hidden ">
                                <img src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-95"
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60"
                                />
                                {/* overlay links */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                        <ArrowUpRight className="w-5  h-5" />
                                    </a>
                                    <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                        <FaGithub className="w-5  h-5" />
                                    </a>
                                </div>
                            </div>
                            {/* content */}

                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                                    <ArrowUpRight
                                        className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1
                                    group-hover:-translate-y-1 translate-all"
                                    />
                                </div>
                                <p className="text-muted-foreground text-sm whitespace-pre-line">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIdx) => (
                                        <span key={tagIdx} className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">{tag}</span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    ))}

                </div>
                {/* view all CTA */}
                <div className="text-center mt-12 animate-fade-in animation-delay-500">
                    <AnimatedBorderButton
                        onClick={() =>
                            window.open("https://github.com/shivashankar9346", "_blank")
                        }
                    >
                        View All Projects
                        <ArrowUpRight className="w-5 h-5" />
                    </AnimatedBorderButton>
                </div>
            </div>
        </section>
    )
}