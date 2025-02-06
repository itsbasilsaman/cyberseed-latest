// Extract query parameters
const urlParams = new URLSearchParams(window.location.search);
const slug = urlParams.get("slug");

async function fetchBlogDetails() {
  try {
    const response = await fetch(`https://saleelvt-cyberceed-back-end-4.onrender.com/api/get_blog_by_slug?slug=${slug}`);
    console.log("Response received: ", response);
    
    if (response.ok) {
      const data = await response.json();
      console.log("Blog data: ", data);

 
      if (document.getElementById("headTitle")) {
        document.getElementById("headTitle").innerText = data.headTitle || "Best Business Consultancy Services | Bookkeeping | Taxation";
      }
      if (document.getElementById("metaTitle")) {
        document.getElementById("metaTitle").textContent = data.title || "Default Meta Title";
      }
      if (document.getElementById("blogImage")) {
        document.getElementById("blogImage").src = data.imageUrl || "default-image.jpg";
      }
      if (document.getElementById("blogTitle")) {
        document.getElementById("blogTitle").textContent = data.title || "Default Blog Title";
      }
      if (document.getElementById("blogDescription")) {
        document.getElementById("blogDescription").innerHTML = data.formattedDescription || "No description available.";
      }
    } else {
      console.error("Error fetching blog:", response.statusText);
      document.body.innerHTML = "<p>Blog post not found. Please try again later.</p>";
    }
  } catch (error) {
    console.error("Error fetching blog details:", error);
    document.body.innerHTML = "<p>Failed to load the blog post. Please try again later.</p>";
  }
}


// Initialize on DOM load
document.addEventListener("DOMContentLoaded", fetchBlogDetails);
