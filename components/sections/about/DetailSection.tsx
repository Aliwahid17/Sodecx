type PropsTypes = {
    data: {
        title: string,
        description: string,
        icon : JSX.Element
    }[]
}

const DetailSection = async ({ data }: PropsTypes) => {
    return (
        <div className="flex flex-col lg:flex-wrap lg:flex-row w-full items-center justify-center container gap-6 px-5 lg:px-24 mx-auto">
            {data.map((item, index) => (
                <div className="flex w-full sm:w-3/4 lg:w-fit" key={index}>
                    <div>
                        <div className="relative  p-1   inline-flex items-center justify-center  overflow-hidden group rounded-full">
                            <span className="absolute left-10 bg-gradient w-full h-full rounded-md"></span>
                            <span className="relative bg-light-primary dark:bg-dark-primary p-2 rounded-full ">
                                <div className="relative p-1  inline-flex items-center justify-center  overflow-hidden group rounded-full">
                                    <span className="absolute bg-gradient w-full h-full rounded-full"></span>
                                    <span className="relative bg-light-primary dark:bg-dark-primary p-2 rounded-full ">
                                       {item.icon}
                                    </span>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center  max-w-lg w-full md:w-9/12 xl:w-96 " >
                        <div className="text-2xl font-semibold mx-2" >{item.title}</div>
                        <div className="bg-gradient h-1 rounded-r-full my-1 " />
                        <div className="ml-2 mr-4">{item.description}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default DetailSection