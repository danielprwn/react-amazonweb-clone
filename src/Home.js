import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://3znvnpy5ek52a26m01me9p1t-wpengine.netdna-ssl.com/wp-content/uploads/2019/05/amazon-smile.jpeg"
          alt="amaznbanner"
        />

        <div className="home_row">
          <Product 
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            price={699.99}
            rating={4}
            image="https://cdn.pixabay.com/photo/2018/10/29/07/18/apple-3780515_960_720.jpg"
          />
          <Product 
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            price={899.99}
            rating={2}
            image="https://cdn.pixabay.com/photo/2014/08/05/10/27/iphone-410311_960_720.jpg"
          />
          <Product 
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            price={1299.99}
            rating={6}
            image="https://cdn.pixabay.com/photo/2015/12/13/16/02/ios-1091303_960_720.jpg"
          />
        </div>

        <div className="home_row">
          <Product 
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            price={3299.99}
            rating={4}
            image="https://cdn.pixabay.com/photo/2016/11/02/14/14/x-box-1791671_960_720.jpg"
          />

          <Product 
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            price={399.99}
            rating={5}
            image="https://cdn.pixabay.com/photo/2018/10/02/11/44/huawei-3718609_960_720.jpg"
          />

          <Product 
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            price={299.99}
            rating={3}
            image="https://cdn.pixabay.com/photo/2019/01/03/22/37/game-boy-3912103_960_720.jpg"
          />
        </div>

        <div className="home_row">
          <Product 
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            price={299.99}
            rating={2}
            image="https://cdn.pixabay.com/photo/2018/04/10/22/57/technology-3309120_960_720.jpg"
          />

          <Product 
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            price={999.99}
            rating={4}
            image="https://cdn.pixabay.com/photo/2018/03/04/15/34/drone-3198326_960_720.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;