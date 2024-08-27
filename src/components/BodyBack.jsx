import './Style.scss'
import Info from './Info'
import FollowInfo from './FollowInfo'
import Friends from './Friends'
import Gallery from './Gallery'
function BodyBack(){
    return(
        <>
        <div className='body__section'>
        <Info/>
        <div className='body__info'>
            <FollowInfo/>
            <Friends />
            <Gallery/>
        </div>
        </div>
        </>
    )
}

export default BodyBack