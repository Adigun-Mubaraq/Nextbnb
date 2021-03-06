import Link from 'next/link';

export default function House(props) {
    return (
        <Link href="/houses/[id]" as={'/houses/' + props.id}>
            <a>
                <div>
                    <img src={props.picture} width="100%" alt="House picture" />
                    <p>
                        {props.type} - {props.town}
                    </p>
                    <p>{props.title}</p>
                </div>
            </a>
        </Link>
    )
}