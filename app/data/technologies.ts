export type TechnologyCategory = {
    name: string,
    technologies: Technology[]
}

export type Technology = {
    name: string,
    icon: string
}

export const technologies: TechnologyCategory[] = [
    {
        name: 'Backend',
        technologies: [
            {
                name: "Java",
                icon: "devicon:java"
            },
            {
                name: "Spring Boot",
                icon: "devicon:spring"
            }
        ]
    },
    {
        name: 'Frontend',
        technologies: [
            {
                name: "JavaScript",
                icon: "devicon:javascript"
            },
            {
                name: "TypeScript",
                icon: "devicon:typescript"
            },
            {
                name: "React",
                icon: "devicon:react"
            },
            {
                name: "Vue",
                icon: "devicon:vuejs"
            },
            {
                name: "Next.js",
                icon: "devicon:nextjs"
            },
            {
                name: "Nuxt",
                icon: "devicon:nuxt"
            },
            {
                name: "Tailwind CSS",
                icon: "devicon:tailwindcss"
            }
        ]
    },
    {
        name: 'Tools',
        technologies: [
            {
                name: "Git",
                icon: "devicon:git"
            },
            {
                name: "GitHub",
                icon: "mdi:github"
            },
            {
                name: "Docker",
                icon: "devicon:docker"
            },
            {
                name: "JetBrains",
                icon: "devicon:jetbrains"
            }
        ]
    }
]