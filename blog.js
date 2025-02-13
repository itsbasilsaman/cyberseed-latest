async function populateBlogFeature() {
  const blogFeatureGrid = document.getElementById("blog-feature-grid");

  // Clear any existing content
  blogFeatureGrid.innerHTML = "";

  try {
    const brand= "CYBERSEED"
    const response = await fetch(`https://saleelvt-cyberceed-back-end.onrender.com/api/get_blog?brand=${brand}`);
    const data = await response.json();

    // Validate response structure
    if (!data.blogPosts || !Array.isArray(data.blogPosts)) {
      throw new Error("Invalid API response format");
    }

    // Iterate over the blog posts and create cards
    data.blogPosts.forEach((post) => {
      const blogCard = document.createElement("div");
      blogCard.className = "blog-card";
      blogCard.onclick = () => {
        window.location.href = `blog-detail.html?slug=${post.slug}`;
      };

      // Blog Image
      const blogImage = document.createElement("img");
      blogImage.className = "blog-card-image";
      blogImage.src = post.imageUrl || "default-image.jpg";
      blogImage.alt = "Blog Featured Image";

      // Blog Title with truncation
      const blogTitle = document.createElement("h2");
      blogTitle.className = "blog-card-title";
      const truncatedTitle =
        post.title.length > 30 ? post.title.slice(0, 30) + "..." : post.title;
      blogTitle.textContent = truncatedTitle;

      blogCard.appendChild(blogImage);
      blogCard.appendChild(blogTitle);
      blogFeatureGrid.appendChild(blogCard);
    });
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    blogFeatureGrid.innerHTML =
      "<p>Failed to load blog posts. Please try again later.</p>";
  }
}

// Initialize the content when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", populateBlogFeature);
async function populateBlogFeature() {
  const blogFeatureGrid = document.getElementById("blog-feature-grid");

  // Clear any existing content
  blogFeatureGrid.innerHTML = "";

  try {
    const brand= "CYBERSEED"
    const response = await fetch(`https://saleelvt-cyberceed-back-end.onrender.com/api/get_blog?brand=${brand}`);
    const data = await response.json();

    // Validate response structure
    if (!data.blogPosts || !Array.isArray(data.blogPosts)) {
      throw new Error("Invalid API response format");
    }

    // Iterate over the blog posts and create cards
    data.blogPosts.forEach((post) => {
      const blogCard = document.createElement("div");
      blogCard.className = "blog-card";
      blogCard.onclick = () => {
        window.location.href = `blog-detail.html?slug=${post.slug}`;
      };

      // Blog Image
      const blogImage = document.createElement("img");
      blogImage.className = "blog-card-image";
      blogImage.src = post.imageUrl || "default-image.jpg";
      blogImage.alt = "Blog Featured Image";

      // Blog Title with truncation
      const blogTitle = document.createElement("h2");
      blogTitle.className = "blog-card-title";
      const truncatedTitle =
        post.title.length > 30 ? post.title.slice(0, 30) + "..." : post.title;
      blogTitle.textContent = truncatedTitle;

      blogCard.appendChild(blogImage);
      blogCard.appendChild(blogTitle);
      blogFeatureGrid.appendChild(blogCard);
    });
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    blogFeatureGrid.innerHTML =
      "<p>Failed to load blog posts. Please try again later.</p>";
  }
}

// Initialize the content when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", populateBlogFeature);
