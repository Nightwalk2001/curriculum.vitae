import projects from "./projects.json"

type Props = {
    time: string
    unit?: string
    name: string
    role: string
    description: string
    skill: string
}

const Project = ({time, unit, name, role, description, skill}: Props) => {
    return <div className={"flex space-x-10 my-4 text-sm"}>
        <div className={"w-1/3 space-y-1 whitespace-nowrap"}>
            <div className={"whitespace-pre-wrap text-gray-900 font-semibold"}>{name}</div>
            <div className={"whitespace-pre-wrap text-gray-900"}>role: {role}</div>
            <div className={"whitespace-pre-wrap"}>{unit}</div>
            <div>{time}</div>
        </div>
        <div className={"w-2/3"}>
            <div className={"space-y-1"}>
                <div className={"font-medium"}>{description}</div>
                <div className={"text-sm text-gray-500"}>technologies：{skill}</div>
            </div>
        </div>
    </div>
}

const Projects = () => {
    return <div>
        <h3>Project experience</h3>
        {projects.map(p => <Project {...p}/>)}
    </div>
}

export default Projects
