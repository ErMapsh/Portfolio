import { FunctionComponent } from "react"
import { Iskill } from "../interface/Iskill"

export const Bar: FunctionComponent<{ data: Iskill }> = ({ data: { Icon, level, name } }) => {
    return (
        <div className="w-4/5 my-2 text-white bg-gray-300 rounded-full dark:bg-dark-200">
            <div className="flex items-center px-4 rounded-full bg-gradient-to-r from-green to-blue-600" style={{width: level}}>
                <Icon className="hidden m-3 lg:block"/>
                <span className="text-sm lg:text-lg">{name}</span>
            </div>
        </div>
    )
}