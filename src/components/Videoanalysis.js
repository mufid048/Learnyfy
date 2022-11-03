import React from 'react'
import { useState } from 'react'
import { Container } from 'react-bootstrap'

export default function Videoanalysis() {
    let url = "https://www.youtube.com/embed/"+localStorage.getItem('video')
    const [isloaded,setisloaded] = useState(false)
    function change(){
        setisloaded(true);
    }
    setTimeout(change,5000);
    if(isloaded){
    return (
        <>
        

        <Container>
            
            <div>
                The best video for your topic is below
            </div>

            <iframe width="560"
                height="315"
                src={url}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        </Container>
        </>
    )
    }else{
        return(
            <div>
                We are analyzing videos.
                <p>Please be patient.</p>
            </div>
        )
    }
}
