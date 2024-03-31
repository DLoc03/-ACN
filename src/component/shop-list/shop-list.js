import React from "react";
import { Link} from "react-router-dom";
import './shop-list.css';
import hinh from '../../assets/hinh1.png'

export default function ShopList() {
    return (
        <div className="list-blog">
            <img src={hinh}/>
            <div className="content-blog">
                <span>DAILY LOG COFFEE</span>
                <p>Daily Log Coffee is an ideal destination for book lovers and coffee in Dalat. Located among the cute streets of this mountain city, Daily Log Coffee is not only a place to enjoy coffee every day but also a place for those who are passionate about coffee and visitors.
                    <br></br>
                    But what makes Daily different from hundreds of other cafes must be the performance of acoustic music every night. There, people met the boys and girls singing with all the passion for the listener to mentally follow each sentence and immerse themselves in every guitar and cajon.</p>
            </div>
        </div>
    )
}