import React, { useEffect, useState } from "react";
import CreatePost from "./createPost/createPost";
import styles from "./community.module.css";
import { api } from "../../db/api";
import Loading from "../loading/loading";
import PostCard from "./PostCard/PostCard";

const Community = () => {
  const [openCrp, setOpenCrp] = useState(false);
  const [allPosts, setAllPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [newPost, setNewPost] = useState({});

  useEffect(() => {
    const fetchPostData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`${api}/community/allPost`, {
          credentials: "include",
        });
        const data = await res.json();
        setAllPosts(data?.posts || []);
      } catch (err) {
        console.error("Error", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPostData();
  }, []);

  useEffect(() => {
    if (newPost && newPost._id) {
      setAllPosts((prevPosts) => [newPost, ...prevPosts]);
    }
  }, [newPost]);

  return (
    <div className={styles.community}>
      <div className={styles.creatPost}>
        <div className={styles.openPost}>
          <input
            type="text"
            value={"Share your blood donation experience...."}
            readOnly
            onClick={() => setOpenCrp(true)}
          />
        </div>
        {openCrp && (
          <CreatePost
            open={openCrp}
            setOpen={setOpenCrp}
            setNewPost={setNewPost}
          />
        )}
      </div>

      <hr />

      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles.allPost}>
          {allPosts.length > 0 ? (
            <>
              {allPosts?.map((post) => (
                <PostCard data={post} key={post?._id} />
              ))}
            </>
          ) : (
            <h3>something went worng</h3>
          )}
        </div>
      )}
    </div>
  );
};

export default Community;
