export default function Statistics({good, neutral, bad, total, positivePercentage}) {
    return (
       
        <section>
          
           <span>Good: { good} </span>
            <span>Neutral: { neutral} </span>
            <span>Bad: {bad} </span>
            <span>Total: {total} </span>
            <span>PositivePercentage: { positivePercentage}% </span>
                    </section>
    )
}
