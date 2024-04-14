const Loader = () => {
    return (
        <div className="flex justify-center min-h-screen items-center ">
            <div className="bg-[#ffffff] w-[100px] h-[100px] shadow-md flex justify-center items-center">
                <span className="loading loading-ring loading-lg"></span>
            </div>
        </div>
    );
};

export default Loader;