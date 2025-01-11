import CounterUp from "../elements/CounterUp"

const achievementData = {
  title: {
    subtitle: "achievement",
    heading: "We Are Increasing Business Success"
  },
  stats: [
    {
      icon: "/assets/img/achievement-icon/01.svg",
      count: 6561,
      label: "Satisfied Clients"
    },
    {
      icon: "/assets/img/achievement-icon/02.svg", 
      count: 600,
      label: "Finished Projects"
    },
    {
      icon: "/assets/img/achievement-icon/03.svg",
      count: 250,
      label: "Skilled Experts"
    },
    {
      icon: "/assets/img/achievement-icon/04.svg",
      count: 590,
      label: "Media Posts"
    }
  ]
}

export default function Achievement3() {
    return (
        <>
            <section className="achievement-section-3 fix section-bg-2">
                <div className="shape-image">
                    <img src="/assets/img/achiv-shape.png" alt="shape-img" />
                </div>
                <div className="container">
                    <div className="achievement-wrapper style-2">
                        <div className="section-title mb-0">
                            <span className="text-white wow fadeInUp">{achievementData.title.subtitle}</span>
                            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                                {achievementData.title.heading}
                            </h2>
                        </div>
                        <div className="counter-area">
                            {achievementData.stats.map((stat, index) => (
                                <div key={index} className="counter-items wow fadeInUp" data-wow-delay={`.${(index + 3)}s`}>
                                    <div className="icon">
                                        <img src={stat.icon} alt="icon-img" />
                                    </div>
                                    <div className="content">
                                        <h2><CounterUp count={stat.count}/>+</h2>
                                        <p>{stat.label}</p>
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
