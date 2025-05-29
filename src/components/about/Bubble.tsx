interface Props {
    link: string;
    icon: string;
}

function Bubble(props: Props) {
    return (
        <a className="bg-gray-50 w-10 h-10 rounded-4xl cursor-pointer flex items-center justify-center hover:scale-110" 
              href={props.link} target="_blank">
            <img src={props.icon} width="25vh" height="25vh"/>
        </a>
    )
}

export default Bubble;