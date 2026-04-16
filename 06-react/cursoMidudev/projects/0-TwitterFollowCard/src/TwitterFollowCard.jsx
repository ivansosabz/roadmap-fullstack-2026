import { useState } from "react"

export function TwitterFollowCard({ children, userName, initialIsFollowing }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    // CORRECCIÓN: primero se declara el estado

    const texto = isFollowing ? 'Siguiendo' : 'Seguir'
    // CORRECCIÓN: ahora sí ya existe isFollowing

    const buttonClassname = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    src={`https://unavatar.io/x/${userName}`}
                    alt="Logo"
                    className='tw-followCard-avatar'
                />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassname} onClick={handleClick}>
                    {texto}
                </button>
            </aside>
        </article>
    )
}