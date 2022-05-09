import { IServices } from "../interface/IServices"
import { FunctionComponent } from 'react'

export const ServicesCard: FunctionComponent<{ service: IServices }>  = ({service: { Icon, title, description }}) => {

    const createMarkup = () => {
        return {
            __html: description,
        }
    }

    return (
        <div className='flex items-center p-2 space-x-4 '>
            <Icon className='w-12 h-12 text-green' />
            <div className=''>
                <h6 className='font-bold'>{title}</h6>
                <p dangerouslySetInnerHTML={createMarkup()} />
            </div>
        </div>
    )
}