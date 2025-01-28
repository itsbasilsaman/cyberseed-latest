// Function to fetch and populate blog collection
async function fetchAndPopulateBlogs() {
  const blogCollection = document.getElementById("blog-collection");
  const apiUrl = "./db.json";

  try {
    // Fetch blogs data
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    const blogs = data.blogs; // Access the "blogs" array

    // Clear existing content
    blogCollection.innerHTML = "";

    // Dynamically populate blog collection
    blogs.forEach((blog) => {
      const blogHTML = `
        <div role="listitem" class="blog-collection-item w-dyn-item w-col w-col-4">
          <div class="blog-card">
            <a href="${blog.postLink}" class="blog-image-wrap w-inline-block">
              <img loading="lazy" src="${blog.imageUrl}" alt="Blog Marketing Image" class="blog-image" />
            </a>
            <div class="blog-date-wrap">
              <p class="blog-date">${blog.date}</p>
              <a href="${blog.categoryLink}" class="blog-category-link">${blog.category}</a>
            </div>
            <a href="${blog.postLink}" class="blog-title">${blog.title}</a>
            <a href="${blog.postLink}" class="blog-read-link w-inline-block">
              <div>Read More</div>
              <div class="blog-arrow-wrap">
                <img loading="lazy" src="https://cdn.prod.website-files.com/662f6161a812082265c77e7d/66309d465ce7c45ba57bdb8a_blog-vector.svg" alt="Right Arrow Icon" class="blog-arrow-icon" />
              </div>
            </a>
          </div>
        </div>
      `;
      blogCollection.insertAdjacentHTML("beforeend", blogHTML);
    });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    blogCollection.innerHTML = `<p>Error loading blogs. Please try again later.</p>`;
  }
}

// Function to fetch and populate blog feature
async function fetchAndPopulateBlogFeature() {
  const blogFeatureGrid = document.getElementById("blog-feature-grid");
  const apiUrl = "./db.json";

  try {
    // Fetch blog feature data
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    const blogPosts = data.blogPosts; // Access the "blogPosts" array

    // Clear existing content
    blogFeatureGrid.innerHTML = "";

    // Populate blog feature section
    blogPosts.forEach((post) => {
      const blogHTML = `
        <div class="blog-feature-item">
          <a href="${post.link}" class="blog-feature-image-wrap w-inline-block">
            <img 
              alt="Blog Featured Image" 
              loading="eager"
              src="${post.imageUrl}"
              class="blog-feature-image"
            />
          </a>
          <div class="blog-feature-text-wrap">
            <div class="blog-feature-date-wrap">
              <p class="blog-feature-date">${post.date}</p>
              <a href="${post.categoryLink}" class="blog-feature-category">${post.category}</a>
            </div>
            <a href="${post.link}" class="blog-feature-title">${post.title}</a>
            <p>${post.description}</p>
            <div class="blog-feature-button-wrap">
              <a href="${post.link}" class="blog-feature-button w-button">Read More</a>
            </div>
          </div>
        </div>
      `;
      blogFeatureGrid.insertAdjacentHTML("beforeend", blogHTML);
    });
  } catch (error) {
    console.error("Error fetching blog posts:", error);
  }
}

// Initialize the content for both sections
document.addEventListener("DOMContentLoaded", () => {
  fetchAndPopulateBlogs();
  fetchAndPopulateBlogFeature();
});
