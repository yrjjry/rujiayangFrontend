import React, { useEffect, useState } from "react";
import axios from "axios";

const Board = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [user, setUser] = useState(null); // Assume you manage this with a global state or context

  useEffect(() => {
    // Fetch messages on component mount
    axios
      .get("/api/messages")
      .then((response) => setMessages(response.data))
      .catch((err) => console.error(err));
  }, []);

  const handlePostMessage = () => {
    if (newMessage.trim() === "") return;
    axios
      .post(
        "/api/messages",
        { message: newMessage },
        {
          headers: { Authorization: `Bearer ${user?.token}` }, // Assuming user.token is stored when logged in
        }
      )
      .then((response) => {
        setMessages([response.data, ...messages]);
        setNewMessage("");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h2>Message Board</h2>
      {user ? (
        <div>
          <textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Write your message here..."
          />
          <button onClick={handlePostMessage}>Post Message</button>
        </div>
      ) : (
        <p>You must be logged in to post a message.</p>
      )}

      <ul>
        {messages.map((msg) => (
          <li key={msg._id}>
            <strong>{msg.user.username}</strong>{" "}
            <em>({new Date(msg.createdAt).toLocaleString()})</em>: {msg.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Board;

// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
// import Comment from "../components/Comment";
// import axios from "axios";
// import { useNavigate, useParams } from "react-router-dom";
// import { URL, IF } from "../url";
// import { useEffect, useState, useContext } from "react";
// import { UserContext } from "../context/userContext";
// import Loader from "../components/Loader";

// const Board = () => {
//   const postId = useParams().id;
//   const [post, setPost] = useState({});
//   const { user } = useContext(UserContext);
//   const [comments, setComments] = useState([]);
//   const [comment, setComment] = useState("");
//   const [loader, setLoader] = useState(false);
//   const navigate = useNavigate();
//   // Fetch Comments in Database
//   const fetchPostComments = async () => {
//     try {
//       const res = await axios.get(URL + `/api/comments/`);
//       setComments(res.data);
//       setLoader(false);
//     } catch (e) {
//       console.log(e);
//     }
//   };
//   useEffect(() => {
//     fetchPostComments();
//   }, [postId]);

//   const postComment = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(
//         URL + "/api/comments/create",
//         { comment: comment, author: user.username, userId: user._id },
//         { withCredentials: true }
//       );
//       console.log(res.data);
//       setComment("");
//       fetchPostComments();
//       // window.location.reload(true);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   const handleDeletePost = async () => {
//     try {
//       const res = await axios.delete(URL + "/api/posts/" + postId, { withCredentials: true });
//       console.log(res.data);
//       // navigate("/");
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       {loader ? (
//         <div className="h-[80vh] flex justify-center items-center w-full">
//           <Loader />
//         </div>
//       ) : (
//         <div className="px-8 px-[200px] mt-8">
//           <div className="flex flex-col mt-4">
//             <h3 className="mt-6 mb-4 font-semibold">Comments:</h3>
//             {comments?.map((c) => (
//               <Comment key={c._id} c={c} post={post} value={comment} />
//             ))}
//           </div>
//           {/* Write a comment */}
//           <div className="flex flex-col mt-4 md:flex-row">
//             <input
//               onChange={(e) => setComment(e.target.value)}
//               type="text"
//               placeholder="Write a comment"
//               className="md:w-[80%] outline-none px-4 mt-4 md:mt-0"
//             />
//             <button
//               onClick={postComment}
//               className="bg-black text-sm text-white px-4 py-2 md:w-[20%] mt-4 md:mt-0"
//             >
//               Add Comment
//             </button>
//           </div>
//         </div>
//       )}
//       <Footer />
//     </div>
//   );
// };

// export default Board;
