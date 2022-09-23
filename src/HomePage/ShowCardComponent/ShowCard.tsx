
import React from 'react';
import '../App/App.css'

interface ShowCardProps{
    name: string
    imageName: string
    description: string
}

export default function ShowCard(props: ShowCardProps){
    return (
            <div className='col-sm-4 text-center'>
                    <img className='rounded-circle' src={`/images/${props.imageName}`} alt='Cake category generic' width="140" height='140' />
                    <h2 className='pt-3'>{props.name}</h2> 
                    <p>{props.description}</p>
                    <p>
                        <a className='btn btn-secondary'>
                            View more 
                        </a>
                    </p>
                </div>
    )
}