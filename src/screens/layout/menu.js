import React, {useState, useEffect} from "react"
import {getCategory} from "../services/Api"
import { Link } from "react-router-dom";

export default function Menu(){

    const [categories, setCategory] = useState([]);
    useEffect(()=>{
        async function fetchCategories(){
            const result = await getCategory(); // sét result chứa data từ api: getCategory
            console.log('result: ', result)
            setCategory(result.data.data) // lấy dữ liệu mảng menu truyền vào state
        }
        fetchCategories();

    },[])   // chỉ lấy 1 lần và render ra nên không truyền tham số ~ component didMount
    return(
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
                <nav>
                    <div id="menu" className="collapse navbar-collage">
                        <ul>
                            {categories.map(el=>(
                                <li key={el._id} className="menu-item"><Link to ={`/category/${el._id}`}>{el.name}</Link></li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}
