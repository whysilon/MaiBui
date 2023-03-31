/**
 * Contains nutritional information
 * 
 * 
 */


function NutritionInformation({data}) {
    return (
        <div>
            {Object.keys(data).map((key,i) => (
                <p key={i}>
                    <span>{key}</span>
                    <span>value: {data[key]}</span>
                </p>
            ))}
        </div>
        )
    
}

export default NutritionInformation