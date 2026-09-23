const experiences = [
    {
        period: "2025 -2026",
        role: "Program Group Leader",
        company: "At College",
        description: `• Leading a team of five members by guiding seminar presentations, coordinating mock interviews with mentors,and maintaining clear communication to ensure all tasks are completed ahead of deadlines.
                         
                      • Strengthened leadership, communication, teamwork, and problem-solving skills through effective task delegation and continuous support to help team members achieve their goals.`,
        technologies:["Leadership", "Public Speaking", "Communication"],
        current: false
    },
    {
        period: "2025 -2026",
        role: "Google Student Ambassador",
        company: "Google Gemini AI",
        description: `• Promoting Google AI tools, especially Gemini AI, by giving seminars on how to use them.

                      • Conducting awareness sessions to help students use Google’s latest AI technologies in their projects andstudies.`,
        technologies: ["Gemini AI", "AI Tools", "Prompt Engineering"],
        current: false
    }

]


export const Experience = () => {
    return (
        <section id="experience"
            className="py-10 relative overflow-hidden"
        >
            <div className="absolute top-1/2 left-1/4 w-96 h-96
        bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
            />
            <div className="container mx-auto px-6 relative z-10">
                <div className="animate-fade-in text-center py-10">
                    <span className="text-secondary-foreground text-lg md:text-4xl font-semibold  foot-medium tracking-wider uppercase textalign-center ">Career Journey</span>
                </div>
                {/* sectoin header */}
                <div className="max-w-3xl mb-16">
                    <h2
                        className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animate-delay-100
                    text-secondary-foreground"
                    >
                        Experience that <span className="font-serif italic font-normal text-white">{" "}speaks volumes.</span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        A timeline of my professonial groeth ,from curios beginner to senior engeenier
                    </p>
                </div>
                {/* timeline */}
                <div className="relative">
                    <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />
                    {/* Experience Items */}
                    <div className="space-y-12">
                        {
                            experiences.map((exp, idx) => (
                                <div
                                    key={idx}
                                    className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                                    style={{ animationDelay: `${(idx + 1) * 150}ms` }}
                                >
                                    {/* timeline dot */}
                                    <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                                        {exp.current && (
                                            <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"></span>
                                        )}
                                    </div>
                                    {/* content */}
                                    <div className={`pl-8 md:pl-0
                                         ${idx % 2 === 0 ?
                                            "md:pr-16 md:text-left" :
                                            "md:col-start-2 md:pl-16"}`}
                                    >
                                        <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-priamry/50 transition-all duration-500`}>
                                            <span className="text-sm text-primary font-medium">{exp.period}</span>
                                            <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                                            <p className="text-muted-foreground">{exp.company}</p>
                                            <p className="text-sm text-muted-foreground mt-4 whitespace-pre-line">{exp.description}</p>
                                            <div className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""}`}>
                                                {
                                                    exp.technologies.map((tech, techIdx) => (
                                                        <span
                                                            key={techIdx}
                                                            className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    )
}