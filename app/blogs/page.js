"use client";
import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { API_BASE_URL } from "../../config/constants";
export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/api/blog`);
      if (!response.ok) {
        throw new Error("Failed to fetch blogs");
      }
      const data = await response.json();
      setBlogs(data);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching blogs:", err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return {
      day: date.getDate().toString().padStart(2, "0"),
      month: date.toLocaleDateString("en-US", { month: "short" }),
    };
  };

  const truncateText = (text, maxLength = 150) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + "...";
  };

  const renderLoadingState = () => (
    <section className="news-section-4 fix section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3">Loading blogs...</p>
          </div>
        </div>
      </div>
    </section>
  );

  const renderErrorState = () => (
    <section className="news-section-4 fix section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="alert alert-danger" role="alert">
              <h4>Error Loading Blogs</h4>
              <p>{error}</p>
              <button className="btn btn-primary" onClick={fetchBlogs}>
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const renderEmptyState = () => (
    <section className="news-section-4 fix section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h3>No Blogs Available</h3>
            <p>Check back later for new blog posts!</p>
          </div>
        </div>
      </div>
    </section>
  );

  const renderBlogCard = (blog, index) => {
    const { day, month } = formatDate(blog.createdAt);

    return (
      <div
        key={blog._id}
        className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp d-flex"
        data-wow-delay={`.${3 + (index % 3) * 2}s`}
        style={{ marginBottom: "30px" }}
      >
        <div
          className="news-card-items style-2 mt-0 pb-0"
          style={{ height: "100%", display: "flex", flexDirection: "column" }}
        >
          <div className="news-image">
            <img
              src={
                blog.image1
                  ? `http://localhost:5000/${blog.image1}`
                  : "/assets/img/news/04.jpg"
              }
              alt="blog-img"
              style={{ height: "250px", objectFit: "cover", width: "100%" }}
            />
            <div className="post-date">
              <h3>
                {day} <br />
                <span>{month}</span>
              </h3>
            </div>
          </div>

          <div
            className="news-content"
            style={{ flex: 1, display: "flex", flexDirection: "column" }}
          >
            <ul>
              <li>
                <i className="fa-regular fa-user" />
                By Admin
              </li>
              {blog.tag1 && (
                <li>
                  <i className="fa-solid fa-tag" />
                  {blog.tag1}
                </li>
              )}
            </ul>
            <h3 style={{ minHeight: "60px" }}>
              <Link href={`/blog-details?id=${blog._id}`}>{blog.title}</Link>
            </h3>
            {blog.overview && (
              <p style={{ flex: 1 }}>{truncateText(blog.overview)}</p>
            )}
            <div style={{ marginTop: "auto", paddingTop: "15px" }}>
              <Link
                href={`/blog-details?id=${blog._id}`}
                className="theme-btn-2 mt-3"
              >
                Read More
                <i className="fa-solid fa-arrow-right-long" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Our Blogs">
      {loading ? (
        renderLoadingState()
      ) : error ? (
        renderErrorState()
      ) : blogs.length === 0 ? (
        renderEmptyState()
      ) : (
        <section className="news-section-4 fix section-padding">
          <div className="container">
            <div className="row g-4">
              {blogs.map((blog, index) => renderBlogCard(blog, index))}
            </div>

            {/* Pagination */}
            {blogs.length > 6 && (
              <div
                className="page-nav-wrap pt-5 text-center wow fadeInUp"
                data-wow-delay=".3s"
              >
                <ul>
                  <li>
                    <Link className="page-numbers" href="#">
                      01
                    </Link>
                  </li>
                  <li>
                    <Link className="page-numbers" href="#">
                      02
                    </Link>
                  </li>
                  <li>
                    <Link className="page-numbers" href="#">
                      03
                    </Link>
                  </li>
                  <li>
                    <Link className="page-numbers" href="#">
                      <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </section>
      )}
    </Layout>
  );
}
