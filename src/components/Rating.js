import React from "react";


function Rating(props) {
    return (
        <div>
            <h1 className="text-gray-500 flex-1 text-xl h-16">{props.question}</h1>
            <div className="rating rating-lg mt-12">
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-rose-400" />
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-rose-400" />
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-rose-400" />
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-rose-400" />
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-rose-400" />
            </div>
            
        </div>
    )
}

export default Rating;