interface Props {
    number: number;
    top: string;
    bot: string;
}

function Bubble(props: Props) {
    return (
        <div className="flex flex-row items-center gap-6 justify-center py-2 px-4 rounded-md cursor-pointer 
        transition delay-50 duration-100 hover:-translate-y-2 hover:bg-amber-500 hover:scale-110">
            <h1 className="text-5xl font-bold">{props.number}</h1>
            <div className="flex flex-column">
              <p className="text-xl">{props.top} <br/> {props.bot}</p>
            </div>
        </div>
    )
}

export default Bubble;