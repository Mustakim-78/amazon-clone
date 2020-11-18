import React from 'react'
import './Home.css';
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <div className="home_Container">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB404803728_.jpg" alt="" />
            </div>

            <div className="home_row">
                <Product
                    id = {101}
                    title = "Samsung Galaxy Note 20 Ultra 5G (Mystic Bronze, 256 GB)  (12 GB RAM)"
                    price = {107999}
                    rating = {5}
                    image = {require("./samsung-note-20.jpeg")} />
                <Product
                    id = {102}
                    title = "Samsung Galaxy S20 Ultra (Cosmic Black, 128 GB)  (12 GB RAM)"
                    price = {97999}
                    rating = {3}
                    image = {require("./samsung-galaxy-s20-ultra.jpeg")} />
            </div>
            <div className="home_row">
            <Product
                id = {103}
                title = "Apple MacBook Air Core i5 5th Gen - (8 GB/128 GB SSD/Mac OS Sierra) MQD32HN/A A1466  (13.3 inch, Silver, 1.35 kg)"
                price = {64990}
                rating = {5}
                image = {require("./apple-macbook.jpeg")} />
            <Product
                id = {104}
                title = "Dell Vostro Core i3 10th Gen - (4 GB/1 TB HDD/Windows 10 Home) Vostro 3401 Thin and Light Laptop  (14 inch, Black, 1.64 kg, With MS Office)"
                price = {34690}
                rating = {4}
                image = {require("./dell-vostro.jpeg")} />
            <Product
                id = {105}
                title = "HP 14 Core i5 10th Gen - (8 GB/512 GB SSD/Windows 10 Home) 14-ck2018TU Thin and Light Laptop  (14 inch, Jet Black, 1.47 kg, With MS Office)"
                price = {47490}
                rating = {4}
                image = {require("./hp-14.jpeg")} />
            </div>
            <div className="home_row">
            <Product
                id = {106}
                title = "Motorola ZX2 100.3cm (40 inch) Full HD LED Smart Android TV with Dolby Atmos and Dolby Vision (40SAFHDME)"
                price = {97999}
                rating = {4}
                image = {require("./motorola-40.jpeg")} />
            </div>

        </div>
    )
}
export default Home