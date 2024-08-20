// "use client";
// import { useEffect, useState } from "react";

// const CommentList = ({ projectId }: any) => {
//   const [comments, setComments] = useState([]);

//   useEffect(() => {
//     const fetchComments = async () => {
//       const res = await fetch(`/api/comments/${projectId}`);
//       const data = await res.json();
//       setComments(data);
//     };
//     fetchComments();
//   }, [projectId]);

//   return (
//     <div>
//       {comments.map((comment: any) => (
//         <div key={comment.projectId}>
//           <p>{comment.name}</p>
//           <p>{comment.content}</p>
//           <p>{new Date(comment.date).toLocaleString()}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CommentList;
