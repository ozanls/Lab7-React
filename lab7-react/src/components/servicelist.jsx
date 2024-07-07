import {useState} from 'react';
import Service from './service';

var servicesArray = [  
    {
        image:"./src/assets/lawnmowing.jpg",
        title:"Lawn Mowing" ,
        description:"We will mow your lawn.",
        price:50
    },
    {
        image:"./src/assets/treetrimming.jpg",
        title:"Tree Trimming" ,
        description:"We will trim your trees.",
        price:70
    },
    {
        image:"./src/assets/landscaping.jpg",
        title:"Landscaping" ,
        description:"We will landscape your lawn.",
        price:100
    },
];

export default function ServiceList(){
    const [serviceList, setServiceList] = useState(servicesArray);
    return(
        <section id="services">
            <h2 id="services__title">Our Services</h2>
                <div className="services__items">
                    {
                        serviceList.map((s) => (
                            <a href="#"><Service    
                                key={s.title}
                                image={s.image} 
                                title={s.title} 
                                description={s.description} 
                                price={s.price} 
                            />
                            </a>
                        ))
                    }
                </div>
            <a href="#"> <div className="button">Load More</div> </a>
        </section>
    )
}