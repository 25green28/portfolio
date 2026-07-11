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
        id: 'project-name-1',
        name: 'Project name 1',
        description: 'Project description 1',
        image: '/templateProjectImg.png',
        technologies: ['Java', 'Spring Boot', 'PostgreSQL'],
        liveDemo: 'https://project-name-1.com',
        github: 'https://github.com/project-name-1'
    },
    {
        id: 'project-name-2',
        name: 'Project name 2',
        description: 'Project description 2',
        image: '/templateProjectImg.png',
        technologies: ['Git', 'Spring Boot', 'PostgreSQL'],
        liveDemo: 'https://project-name-1.com',
    },
    {
        id: 'project-name-3',
        name: 'Project name 3',
        description: 'Project description 3',
        image: '/templateProjectImg.png',
        technologies: ['Docker', 'Spring Boot', 'PostgreSQL'],
        github: 'https://github.com/project-name-1'
    },
    {
        id: 'project-name-4',
        name: 'Project name 4',
        description: 'Project description 4',
        image: '/templateProjectImg.png',
        technologies: ['Python', 'Spring Boot', 'PostgreSQL'],
    }
]