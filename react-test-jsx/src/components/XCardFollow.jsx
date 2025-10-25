import { useState } from 'react'
import './XCardFollow.css'

export function XCardFollow ({children, userName, initialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const textBtn = isFollowing ?  "Folowing" : "Follow"
    const btnClassName = isFollowing ? "x-card-follow-btn-follow is-following" : "x-card-follow-btn-follow"

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <>
            <article className='x-card-follow'>
                <figure className='x-card-follow-avatar'>
                    <img src={`https://unavatar.io/${userName}`} alt={`imagen de perfil de ${userName}`}  />
                </figure>
                <div className='x-card-follow-info'>
                    <p className='x-card-follow-name'>{children}</p>
                    <p className='x-card-follow-user-name'>@{userName}</p>
                </div>
                <button onClick={handleClick} className={btnClassName}>
                    {textBtn}
                </button>
            </article>
        </>
    )
}