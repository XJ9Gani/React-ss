function Info(){
  return(
    <>
    <div className="info__block">
        <div className="info__block--img"></div>
        <h1 className='info__name'>Thomas R.</h1>
        <h4 className="info__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </h4>
        <div className="info__link">
            <button className="info__link--btn">Follow</button>
            <button className="info__link--telegram">
            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 1.03938L6.625 12.2894V17.9144L10 14.5394M1 8.35187L19 1L15.85 17.3519L1 8.35187Z" stroke="#084FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </button>
        </div>
    </div>
    </>
  )
}

export default Info;