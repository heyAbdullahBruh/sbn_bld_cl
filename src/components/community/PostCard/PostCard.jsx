import React, { useState, useEffect } from "react";
import styles from "./postcard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboard,
  faDotCircle,
  faPencilAlt,
  faShare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import PostLike from "./postLike";
import EditP from "../editPost/EditP";
import { api } from "../../../db/api";

const PostCard = ({ data }) => {
  const {
    _id,
    uName,
    photos = [],
    uProfile,
    createdAt,
    caption = "",
    likes,
  } = data;
  // console.log(data);
  const [actionBarControl, setActionBarControl] = useState(false);
  const [currIndex, setCurrIndex] = useState(0);

  // Format date
  const formatDate = (dateStr) => new Date(dateStr).toLocaleDateString("en-US");

  // Handle ActionBar toggle
  const handleActionBar = (id) => {
    if (id === _id) {
      setActionBarControl((prev) => !prev);
    }
  };

  // Hide action bar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(`.${styles.postAct}`)) {
        setActionBarControl(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Image slider
  const previous = () => {
    if (currIndex > 0) {
      setCurrIndex((prev) => prev - 1);
    }
  };

  const next = () => {
    if (currIndex < photos.length - 1) {
      setCurrIndex((prev) => prev + 1);
    }
  };

  const [editOpen, setEditOpen] = useState(false);
  const [postData, setPostData] = useState({});

  const handleEditOpen = (pId) => {
    if (pId === _id) {
      setEditOpen(true);
      setPostData({ _id, caption, photos });
    }
  };

  const deletePost = async (postId) => {
    try {
      const response = await fetch(
        `${api}/community/delete/${postId}/`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );

      const getData = await response.json();

      if (getData?.success === true) {
        setPostData((prev) => ({
          ...prev,
          photos: prev.photos?.filter((img) => img?.imgId !== photoId),
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.postCard}>
      <div className={styles.postUp}>
        <div className={styles.useInfo}>
          <div className={styles.userImg}>
            <img src={uProfile} alt={`${uName} profile`} />
          </div>
          <div className={styles.userD}>
            <h3>{uName}</h3>
            <p>{formatDate(createdAt)}</p>
          </div>
        </div>
        <div className={styles.postAct}>
          <button className={styles.cntrl} onClick={() => handleActionBar(_id)}>
            <FontAwesomeIcon icon={faDotCircle} />
            <FontAwesomeIcon icon={faDotCircle} />
            <FontAwesomeIcon icon={faDotCircle} />
          </button>

          <ul
            className={styles.actionBar}
            style={{ display: actionBarControl ? "flex" : "none" }}
          >
            <li>
              <Link to="#" onClick={() => handleEditOpen(_id)}>
                <button>
                  <FontAwesomeIcon icon={faPencilAlt} /> Edit
                </button>
              </Link>
            </li>
            <li>
              <Link to="/#">
                <button>
                  <FontAwesomeIcon icon={faClipboard} /> Copy Link
                </button>
              </Link>
            </li>
            <li>
              <Link to="#">
                <button>
                  <FontAwesomeIcon icon={faTrash} /> Delete
                </button>
              </Link>
            </li>
            <li>
              <Link to="/#">
                <button>
                  <FontAwesomeIcon icon={faShare} /> Share
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <hr className={styles.hr} />

      <div className={styles.postMidle}>
        <div className={styles.caption}>
          <pre>{caption.trim()}</pre>
        </div>

        <div className={styles.photos}>
          <button
            className={styles.preBtn}
            onClick={previous}
            disabled={currIndex === 0}
          >
            &#10094;
          </button>

          <div className={styles.images}>
            <img src={photos[currIndex]?.photo} alt={`post-${currIndex + 1}`} />
          </div>

          <button
            className={styles.nextBtn}
            onClick={next}
            disabled={currIndex === photos.length - 1}
          >
            &#10095;
          </button>
        </div>
      </div>

      <hr className={styles.hr} />

      <div className={styles.postDown}>
        <PostLike pLikes={likes} postId={_id} />
      </div>
      <EditP
        open={editOpen}
        setOpen={setEditOpen}
        postData={postData}
        setPostData={setPostData}
      />
    </div>
  );
};

export default PostCard;
