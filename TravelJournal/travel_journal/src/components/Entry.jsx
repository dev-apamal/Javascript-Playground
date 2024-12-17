export default function Entry(props){
    return (
        <>
            <article className="journal-entry">
                <div className="main-image-container">
                    <img
                        className="main-image"
                        src="https://scrimba.com/links/travel-journal-japan-image-url"
                        alt="Mount Fuji" />
                </div>
                <div className="info-container">
                    <img
                        className="marker"
                        src="./src/assets/marker.png"
                        alt="map marker icon" />
                    <span className="country">JAPAN</span>
                    <a href="www.google.com" target="_blank">View on Google Maps</a>
                    <h2 className="entry-title">Mount Fuji</h2>
                    <p className="trip-dates">12 Jan - 21 Jan</p>
                    <p className="entry-text">Hello how are you</p>
                </div>
            </article>
            <hr />
        </>
    )
}