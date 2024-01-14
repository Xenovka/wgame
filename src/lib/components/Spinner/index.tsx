interface IProps {
    label: string;
    fullHeight?: boolean;
}

function Spinner({ label, fullHeight }: IProps) {
    return (
        <div
            className={`${
                fullHeight ? "h-screen" : "h-full"
            } flex flex-col col-span-10 gap-4 justify-center items-center`}
        >
            <span className="loader w-fit h-fit"></span>
            <p>{label}</p>
        </div>
    );
}

export default Spinner;
