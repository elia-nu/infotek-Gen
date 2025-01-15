export default function Preloader() {
    return (
        <>

            <div id="preloader" className="preloader">
                <div className="animation-preloader">
                    <div className="spinner">
                    </div>
                    <div className="txt-loading">
                        <span data-text-preloader="G" className="md:letters-loading">
                            G
                        </span>
                        <span data-text-preloader="E" className="md:letters-loading">
                            E
                        </span>
                        <span data-text-preloader="N" className="md:letters-loading">
                            N
                        </span>
                        <span data-text-preloader="S" className="md:letters-loading">
                            S
                        </span>
                        <span data-text-preloader="H" className="md:letters-loading">
                            H
                        </span>
                        <span data-text-preloader="I" className="md:letters-loading">
                            I
                        </span>
                        <span data-text-preloader="F" className="md:letters-loading">
                            F
                        </span>
                        <span data-text-preloader="T" className="md:letters-loading">
                            T
                        </span>
                        <span data-text-preloader="E" className="md:letters-loading">
                            E
                        </span>
                        <span data-text-preloader="R" className="md:letters-loading">
                            R
                        </span>
                    </div>
                    <p className="text-center">Loading</p>
                </div>
                <div className="loader">
                    <div className="row">
                        <div className="col-3 loader-section section-left">
                            <div className="bg" />
                        </div>
                        <div className="col-3 loader-section section-left">
                            <div className="bg" />
                        </div>
                        <div className="col-3 loader-section section-right">
                            <div className="bg" />
                        </div>
                        <div className="col-3 loader-section section-right">
                            <div className="bg" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
