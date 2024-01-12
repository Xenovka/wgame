function Spinner() {
    return (
        <div className="w-full h-full flex flex-col col-span-10 gap-4 justify-center items-center">
            <span className="loader w-fit h-fit"></span>
            <p>Fetching Games...</p>
        </div>
    );
}

export default Spinner;
