// "use client";
// import { useState } from "react";

// const CommentForm = ({ projectId }: any) => {
//   const [name, setName] = useState("");
//   const [content, setContent] = useState("");

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
//     const res = await fetch("http://localhost:5000/api/comments", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ name, content, projectId }),
//     });
//     const data = await res.json();
//     console.log(data);
//     setName("");
//     setContent("");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Your name"
//         required
//       />
//       <textarea
//         value={content}
//         onChange={(e) => setContent(e.target.value)}
//         placeholder="Your comment"
//         required
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default CommentForm;
