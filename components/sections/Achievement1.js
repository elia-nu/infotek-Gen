"use client"
import CounterUp from "../elements/CounterUp"
import useStore from "../../store/store"

export default function Achievement1() {
    const { achievements } = useStore()

    return (
        <>
            <section className="achievement-section fix section-padding pt-0">
                <div className="container">
                    <div className="achievement-wrapper">
                        <div className="section-title mb-0">
                            <span className="text-white wow fadeInUp">achievement</span>
                            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                                We Are Increasing <br /> Business Success
                            </h2>
                        </div>
                        <div className="counter-area">
                            {achievements?.map((item, index) => (
                                <div key={item._id} className="counter-items wow fadeInUp" data-wow-delay={`0.${(index + 3)}s`}>
                                    <div className="icon">
                                        <img src={`${process.env.NEXT_PUBLIC_API_URL}/${item.achievement[0].icons}`} alt="icon-img" />
                                    </div>
                                    <div className="content">
                                        <h2><CounterUp count={item.achievement[0].number}/>+</h2>
                                        <p>{item.achievement[0].title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
