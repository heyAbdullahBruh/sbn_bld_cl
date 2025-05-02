import React from "react";
import Banner from "./banner/Banner";
import styles from "./home.module.css";
import Features from "./features/feat";
import BLDinfo from "./Dinfo/BLDinfo";
import PostCard from "../community/PostCard/PostCard";
const Home = () => {
  const data = [
    {
      _id: "post1",
      uName: "Mr.Pie",
      uProfile: "https://i.ibb.co.com/B5SMbNxg/federal-blood-wabe.jpg",
      caption: `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  Reiciendis quaemodi a et repellendus doloremque voluptatibus dolorum, sint ratione saepe
  harum molestias accusantium iste dolor, rem nam deleniti, expedita
  aperiam. Et repellendus doloremque voluptatibus dolorum,
  `,
      photos: [
        { img: " https://i.ibb.co.com/wZF62DqP/bloodD3.png" },
        { img: "  https://i.ibb.co.com/5ddmTzD/bloodD4.png" },
        { img: " https://i.ibb.co.com/Rk6Ztmtx/bloodD5.png" },
        { img: " https://i.ibb.co.com/5g7qK6db/bloodD6.png" },
        { img: " https://i.ibb.co.com/LX8XWfNs/bloodD7.png" },
      ],
      createdAt: Date.now(),
      likes: 20,
    },
    {
      _id: "post2",
      uName: "Mr.Pie",
      uProfile: "https://i.ibb.co.com/B5SMbNxg/federal-blood-wabe.jpg",
      caption: `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  Reiciendis quaemodi a et repellendus doloremque voluptatibus dolorum, sint ratione saepe
  harum molestias accusantium iste dolor, rem nam deleniti, expedita
  aperiam. Et repellendus doloremque voluptatibus dolorum,
  `,
      photos: [
        { img: " https://i.ibb.co.com/wZF62DqP/bloodD3.png" },
        { img: "  https://i.ibb.co.com/5ddmTzD/bloodD4.png" },
        { img: " https://i.ibb.co.com/Rk6Ztmtx/bloodD5.png" },
        { img: " https://i.ibb.co.com/5g7qK6db/bloodD6.png" },
        { img: " https://i.ibb.co.com/LX8XWfNs/bloodD7.png" },
      ],
      createdAt: Date.now(),
      likes: 20,
    },
    {
      _id: "post3",
      uName: "Mr.Pie",
      uProfile: "https://i.ibb.co.com/B5SMbNxg/federal-blood-wabe.jpg",
      caption: `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  Reiciendis quaemodi a et repellendus doloremque voluptatibus dolorum, sint ratione saepe
  harum molestias accusantium iste dolor, rem nam deleniti, expedita
  aperiam. Et repellendus doloremque voluptatibus dolorum,
  `,
      photos: [
        { img: " https://i.ibb.co.com/wZF62DqP/bloodD3.png" },
        { img: "  https://i.ibb.co.com/5ddmTzD/bloodD4.png" },
        { img: " https://i.ibb.co.com/Rk6Ztmtx/bloodD5.png" },
        { img: " https://i.ibb.co.com/5g7qK6db/bloodD6.png" },
        { img: " https://i.ibb.co.com/LX8XWfNs/bloodD7.png" },
      ],
      createdAt: Date.now(),
      likes: 20,
    },
  ];

  return (
    <section className={styles.home}>
      {/* <h1>Home</h1> */}
      <Banner />
      <hr />
      <BLDinfo />
      <hr />
    

{
  // data?.map((d)=><PostCard data={d} key={d?._id}/>)
}

      <Features />
      <hr />
    </section>
  );
};

export default Home;
