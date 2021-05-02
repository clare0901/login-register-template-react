import React from 'react';
import Nav from './Nav'

// import db from '../firebase'

function Home() {

    // useEffect( () => {
    //     db.collection("users").onSnapshot( snapshot => {
    //         snapshot.docs.map( doc => console.log(doc.data()) )
    //     })
    // },[])

    return(
        <div>
            <Nav/>
            <h1>Home Pageee</h1>
        </div>
    )
}

export default Home;