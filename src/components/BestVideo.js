import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Button, Container } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function BestVideo() {

    const [search, setSearch] = useState()  //contains which topic to be searched
    const [video, setvideo] = useState([])  //contains video of search results
    let videoid=[]

    async function searchResults() {
        console.log(search)
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search?key=AIzaSyAc71axiSPsLqn5tXwN-kDpGS7PQq_-K8M&type=video&part=snippet&q=' + search)
        setvideo(response.data.items.slice(0,10))
    }

    // function bestvideofinder(){
    //     alert("Service not available at this moment. Please try again later")
    // }

    function random(){
        let random = Math.floor(Math.random()*videoid.length)
        localStorage.setItem('video',videoid[random]);
    }

    return (
        <div>
            <Container className='searchbox'>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    <Form.Control
                        placeholder="Search"
                        aria-label="search"
                        aria-describedby="basic-addon1"
                        value={search}
                        onChange={(e) => { setSearch(e.target.value) }}
                    />
                    <Button onClick={searchResults} className='primary'>Search</Button>
                </InputGroup>
            
                <Container>
                    <Button className='bestvideofinder'><a href='/videoanalysis'>Find Best Video</a></Button>
                </Container>
                <Container className='searchresults'>
                    {video.map((vid)=>{
                        let url = "https://www.youtube.com/embed/"+vid.id.videoId
                           videoid.push(vid.id.videoId);
                        return(
                        <iframe width="560" 
                            height="315" 
                            src = {url}
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                    )}
                    )}
                </Container>
                {
                    random()
                }

            </Container>
        </div >
    )
}
