import BlogPost from "@/components/blog-post"

export default function Blog() {
  return (
    <main>
      <div className="intro-paragraph">
        <p>The blog page!</p>
      </div>
      <hr style={{
        borderTop:"1px solid black",
        marginTop:"0.25rem",
        marginBottom:"1rem"}}></hr>
      <BlogPost
        title={"Step by Step"}
        link={"/more"}
        date={"May 16th, 2023"}
      />
    </main>
  )
}