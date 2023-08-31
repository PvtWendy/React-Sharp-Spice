export default function Article(props) {
    return (
        props.position === "left" ?
            <article id={props.key}>
                <img src={props.image} />
                <div>
                    {props.text}
                    <button>Read More</button>
                </div>

            </article>
            :
            <article id={props.key}>

                <div>
                    {props.text}
                    <button>Read More</button>
                </div>
                <img src={props.image} />
            </article>
    )
}