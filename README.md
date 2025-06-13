<h1>🛒 Full Stack E-Commerce Website</h1>

  <p>
    This is a full-stack e-commerce web application built using the <strong>MERN stack</strong> 
    (MongoDB, Express.js, React.js, Node.js) with REST APIs and Admin/User interfaces. The app supports
    features such as product listings, cart management, order placement, admin product controls,
    and user authentication — all with a responsive, mobile-friendly interface.
  </p>

  <h2>Tech Stack</h2>
  <ul>
    <li><strong>Frontend:</strong> React.js, Context API, Axios, CSS (or Tailwind/Bootstrap)</li>
    <li><strong>Backend:</strong> Node.js, Express.js, MongoDB, Mongoose</li>
    <li><strong>Authentication:</strong> JSON Web Tokens (JWT), bcrypt</li>
    <li><strong>File Uploads:</strong> Multer, Cloudinary</li>
    <li><strong>Deployment:</strong> Vite, Netlify/Render/Heroku (optional)</li>
  </ul>

  <h2>Features</h2>
  <ul>
    <li>Secure user login/signup with JWT-based authentication</li>
    <li>Product browsing with dynamic filtering and search</li>
    <li>Cart management with quantity update and total calculation</li>
    <li>Order placement and order tracking</li>
    <li>Admin panel to manage products and view orders</li>
    <li>Image upload via Cloudinary (for product listings)</li>
    <li>Fully responsive design for mobile and desktop</li>
  </ul>

  <h2>Project Structure</h2>
  <ul>
    <li><strong>frontend/</strong> – Customer-facing UI</li>
    <li><strong>backend/</strong> – API server with DB connection</li>
    <li><strong>admin/</strong> – Admin dashboard panel</li>
  </ul>


  <h2>Features</h2>

<h3>User Features</h3>
<ul>
  <li>User Registration and Login with JWT Authentication</li>
  <li>Add/Remove items from cart</li>
  <li>View cart total and quantity dynamically</li>
  <li>View order history</li>
  <li>Search and browse products</li>
  <li>View detailed product information</li>
  <li>Subscribe to newsletter (NewsletterBox component)</li>
  <li>Fully responsive UI for mobile and desktop</li>
</ul>

<h3>🛠 Admin Features</h3>
<ul>
  <li>Admin Login and Protected Routes</li>
  <li>Add new products with image upload (Cloudinary)</li>
  <li>Edit or delete existing products</li>
  <li> Admin Dashboard with list of all products and orders</li>
</ul>

<h3> General Features</h3>
<ul>
  <li>Separate frontend, backend, and admin panels for clean architecture</li>
  <li>Context API for state management (e.g., shopContext)</li>
  <li>Real-time cart calculations</li>
  <li>Reusable components like <code>Navbar</code>, <code>Footer</code>, <code>SearchBar</code></li>
  <li>Middleware for admin/user route protection</li>
  <li>Image storage and upload with Cloudinary and Multer</li>
</ul>