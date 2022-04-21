import React from "react"
import "../component/asserts/css/faq.css"

const FAQ = [
  {
    heading: "When is the mint?",
    text: "May 2022",
  },
  {
    heading: "How much is the mint?",
    text: "1.5 SOL",
  },
  {
    heading: "What can I do with my PAPs?",
    text: "PAP holder will be able to join the Training Camp and earn 100% guaranteed daily rewards. PAP holder will be able to acquire new weapons for each of their PAPs and send them off to various missions with unpredictable plots to earn extra rewards and eventually the chance to unlock top-shelf mythical weapons.",
  },
  {
    heading: "Is there a token?",
    text: "Yes - $BAMBOO is the currency in the world of Post Apocalyptic Pandas. $BAMBOOs are given out as rewards and can be used to acquire weapons and additional gears for increasing individual PAPs’ stats and odds against each missions.",
  },
]
const Faqs = () => {
  return (
    <>
      <section class="faqs max" id="faq">
        <div class="faqs-container">
          <h1>faqs</h1>
          <div class="faq">
            {FAQ.map((item, key) => {
              return (
                <div key={key} className="faq-line">
                  <input id={`faq-${key}`} type="checkbox" />
                  <label for={`faq-${key}`} >
                    <p class="faq-heading">{item.heading}</p>
                    <div class="faq-arrow"></div>
                    <p class="faq-text">{item.text}</p>
                  </label>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Faqs
