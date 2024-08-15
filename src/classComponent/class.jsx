import React from "react";
export class ClassDemo extends React.Component {
    constructor(){
        super();
        this.car={
            Modal:"Ferari",
            Cities:['Hyd','Delhi'],
            Ratings:{Rate:4.5,Reviews:4500}
        }
        
    }
    render(){
        return(
            <div className="container-fuid">
                <ul>
                    <li>{this.car.Modal}</li>
                  <li>
                    <span>Cities</span>
                    {
                        this.car.Cities.map(item=><dt key={item}>{item}</dt>)
                    }
                  </li>
                  <li>
                    <span>Ratings</span>
                    {
                        Object.values(this.car.Ratings).map(itm=><dt key={itm}>{itm}</dt>)
                    }
                  </li>
                </ul>
            </div>
        )
    }
}