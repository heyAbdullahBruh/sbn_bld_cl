import React from "react";
import styles from '../home.module.css'
import img1 from "../../../assets/bloodD14.png";
import img2 from "../../../assets/bloodD16.png";
import img3 from "../../../assets/bloodD19.png";
const Features = () => {
  return (
    <section
      className={styles.features}
    >
    <div className={styles.featItems}>
        <img src={img1} alt="imageOne" />
        <h3>রক্তদান জীবন বাঁচায়</h3>
        <p>"প্রতিটি রক্তের ফোঁটা একটি জীবন রক্ষার শক্তি রাখে। রক্তদান করে, আপনি কারও জন্য নায়ক হয়ে উঠতে পারেন। সহজ, কার্যকরী ও জীবন বাঁচানো রক্তদানের মিশনে আমাদের সাথে যোগ দিন।"</p>
    </div>
    <div className={styles.featItems}>
        <img src={img2} alt="iamgeTwo" />
        <h3>স্বাস্থ্য ও গুণগত মান নিশ্চিতকরণ</h3>
        <p>"আপনার নিরাপত্তা ও গ্রহণকারীর সুস্থতাই আমাদের প্রধান অগ্রাধিকার। প্রতিটি রক্তদানের ক্ষেত্রে কঠোর পরীক্ষা ও গুণগত মান নিশ্চিত করা হয়, যা এই প্রক্রিয়াকে নিরাপদ, কার্যকর ও নির্ভরযোগ্য করে তোলে।"</p>
    </div>
    <div className={styles.featItems}>
        <img src={img3} alt="imageThree" />
        <h3>A Community of Lifesavers</h3>
        <p>"Together, we can create a network of hope. Federal Blood Wave connects willing donors with those in need, ensuring that no one has to wait for life-saving blood. Be a part of something bigger—be a lifesaver!"</p>
    </div>
    </section>
  );
};

export default Features;
