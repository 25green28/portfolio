export type Project = {
    id: string,
    name: string,
    description: string,
    image: string,
    technologies: string[],
    liveDemo?: string,
    github?: string
}

export const projects: Project[] = [
    {
        id: 'my-diy-library',
        name: 'My DIY Library',
        description: 'A website that allows users to create their own DIY Library by using Python and Flask, by following a step-by-step guide.',
        image: '/projectsImages/my-diy-library.png',
        technologies: ['React', 'Vite', 'TailwindCSS', 'TypeScript'],
        github: 'https://github.com/25green28/my-diy-library'
    },
    {
        id: 'portfolio',
        name: 'Portfolio',
        description: 'A portfolio website that showcases my projects and experience (this website).',
        image: '/projectsImages/portfolio.png',
        technologies: ['Vue', 'Nuxt', 'TailwindCSS', 'TypeScript'],
        liveDemo: 'https://mateuszlaski.netlify.app',
        github: 'https://github.com/25green28/portfolio'
    }
]
