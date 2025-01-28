// Extract query parameters
const urlParams = new URLSearchParams(window.location.search);
const slug = urlParams.get("slug");

async function fetchBlogDetails() {
  try {
    const response = await fetch(`https://saleelvt-cyberceed-back-end-5.onrender.com/api/get_blog_by_slug?slug=${slug}`);
    console.log("Response received: ", response);
    
    let data; // Declare data in the outer scope
    if (response.ok) {
      data = await response.json();
      console.log("Blog data: ", data);

      // Populate blog details
      document.getElementById("blogImage").src = data.imageUrl || "default-image.jpg";
      document.getElementById("blogTitle").textContent = data.title;
      document.getElementById("blogDescription").innerHTML = data.formattedDescription;
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
