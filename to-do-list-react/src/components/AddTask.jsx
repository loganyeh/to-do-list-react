
function AddTask(){

    return(
        <>
            <div className="h-1/8 w-11/12 flex justify-around items-center m-4 border-2 border-black">
                <div className="h-full w-2/3 border-2 border-red-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro vel quo accusamus reprehenderit consequuntur consequatur quas nesciunt, veniam dolorem nihil nostrum rerum qui perspiciatis possimus, sed vitae non tenetur nobis!</div>
                <button className="h-1/2 w-2/12 border-2 border-red-600 text-2xl rounded-2xl hover:bg-gray-400 active:bg-gray-300">Delete</button>
            </div>
        </>
    )
}

export default AddTask;