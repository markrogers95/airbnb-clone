import React from 'react';
import Banner from './banner';
import Card from './card'
import './homepage.css';


function Homepage() {
    return (
        <div className='homepage'>
            <Banner/>

            <div className='home-section'>
                <Card 
                    src = "http://www.tantrumkitesurf.com/wp-content/uploads/2015/01/kiting-HD.jpg"
                    title = "Activities"
                    description = "Try your hand at Kitesurfing!"
                />
                <Card 
                    src = "http://www.johansens.com/wp-content/uploads/2015/06/Sticky-2.jpg"
                    title = "Cuisine!"
                    description = "Head out for some great food!"
                />
                <Card 
                    src = "https://cdn.fodors.com/wp-content/uploads/2018/04/St-Petersburg-Intriuge-Hero.jpg"
                    title = "Sights"
                    description = "Head out to see the sights!"
                />

            </div>
            <div className='home-section'>
                <Card 
                    src = "https://www.interiorsbysteveng.com/wp-content/uploads/2017/06/Commercial_Interior_Design_Steven_G.jpg"
                    title = "Amsterdam"
                    description = "Cool interior design."
                    price = "£280/night"
                />
                <Card 
                    src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fadorable-home.com%2Fwp-content%2Fuploads%2F2016%2F10%2FInterior-Design-Style-Modern-defined.jpg&f=1&nofb=1"
                    title = "Auckland"
                    description = "A modern coastal bungalow."
                    price = "£90/night"
                />
                <Card 
                    src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.summitdaily.com%2Fwp-content%2Fuploads%2F2016%2F08%2FHOMELogCabins-SDN-011516-1-2-1-1240x790.jpg&f=1&nofb=1"
                    title = "Nebraska!"
                    description = "A cosy log cabin - complete with Sauna!"
                    price="£300/night"
                />

            </div>
        </div>
    )
};

export default Homepage;