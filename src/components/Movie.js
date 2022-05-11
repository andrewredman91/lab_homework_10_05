import React from "react";

const Movie = ({name,key,url}) => {

return(
<>
<li><ul><a href= {url}> {name}</a></ul></li>
    
</>
)

}

export default Movie;