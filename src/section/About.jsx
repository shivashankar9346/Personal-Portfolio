
import { Code2, Rocket, Users, Lightbulb } from "lucide-react"
const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        description: "Writing  maintainable ,scalable code that sounds the test of time"
    },
    {
        icon: Rocket,
        title: "performance",
        description: "Optimizing for speed and delivering lighting-fast user experience."
    },
    {
        icon: Users,
        title: "Collabration",
        description: "Working closely with teams to bring ideas of life"
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description: "Staying ahead with the latest techonologirs and best practices"
    }
]

export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* left column */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm foot-medium tracking-wider uppercase ">About Me</span>
                        </div>
                        <h2 className=" text-4xl md:text-5xl leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                            Building the future
                            <span className="font-serif italic font-normal text-white"> one component at a  time.</span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                            <p>
                                I’m Shiva Shankar Kotte, a passionate Full Stack Developer and a B.Sc. graduate in Artificial Intelligence and Machine Learning.
                                I enjoy building modern, responsive, and user-friendly web applications that combine clean design with practical functionality. I have a strong interest in web development and continuously work on improving my technical and problem-solving skills.
                            </p>
                            <p>
                                My technical skills include HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB. I enjoy working on both frontend and backend development, creating responsive interfaces, developing REST APIs, and connecting applications with databases.
                                Through personal and academic projects, I have gained hands-on experience in turning ideas into functional web applications.
                            </p>
                            <p>
                                I’m always eager to learn new technologies, take on challenging projects, and grow as a developer. My goal is to become a skilled Full Stack Developer who can build scalable and impactful digital solutions.
                                I believe in continuous learning, writing clean code, and creating experiences that are simple, efficient, and meaningful for users.
                            </p>
                        </div>
                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animate-dealy-300">
                            <p className="text-lg font-medium italic text-foreground">
                                My goal is to become a skilled Full Stack Developer by continuously improving my technical and problem-solving skills. I aim to build scalable, responsive,
                                 and user-friendly web applications while learning new technologies and gaining real-world experience.
                            </p>
                        </div>
                    </div>
                    {/* Right Column */}

                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item,idx)=>(
                            <div key={idx} className="glass p-6 rounded-2xl animate-fade-in "
                            style={{animationDelay:`${(idx + 1)*100}ms`}}
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                    <item.icon className="w-6 h-6 text-primary"/>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="texr-sm text-muted-foreground">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}