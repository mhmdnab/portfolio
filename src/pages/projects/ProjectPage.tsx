// "use client";
// import { useSearchParams } from "next/navigation";
// import CommentForm from "../../components/CommentForm";
// import CommentList from "../../components/CommentList";

// const ProjectPage = () => {
//   const searchParams = useSearchParams();
//   const id = searchParams ? searchParams.get("id") : null;

//   if (!id) return <div>Loading...</div>; // Handle loading state

//   return (
//     <div>
//       <h1>Project {id}</h1>
//       <CommentForm projectId={id} />
//       <CommentList projectId={id} />
//     </div>
//   );
// };

// export default ProjectPage;
