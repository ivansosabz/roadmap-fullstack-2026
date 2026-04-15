export function TwitterFollowCard({userName, name, isFollowing}) {
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img src={`https://unavatar.io/x/${userName}`} alt="Logo" className='tw-followCard-avatar'/>
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-button'>{isFollowing ? 'Unfollow' : 'Follow'}</button>
            </aside>
        </article>
    )
}