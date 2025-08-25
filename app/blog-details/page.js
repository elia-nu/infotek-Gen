"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { API_BASE_URL } from "../../config/constants";

export default function BlogDetails() {
  const [blogPost, setBlogPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const searchParams = useSearchParams();
  const blogId = searchParams.get("id");

  useEffect(() => {
    if (blogId) {
      fetchBlogPost(blogId);
    }
  }, [blogId]);

  const fetchBlogPost = async (id) => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/api/blog/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch blog post");
      }
      const data = await response.json();
      setBlogPost(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Blog Details">
        <section className="news-standard fix section-padding">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-3">Loading blog post...</p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Blog Details">
        <section className="news-standard fix section-padding">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <div className="alert alert-danger" role="alert">
                  <h4>Error Loading Blog Post</h4>
                  <p>{error}</p>
                  <Link href="/blogs" className="theme-btn">
                    Back to Blogs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  if (!blogPost) {
    return (
      <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Blog Details">
        <section className="news-standard fix section-padding">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2>Blog Post Not Found</h2>
                <p>The blog post you're looking for doesn't exist.</p>
                <Link href="/blogs" className="theme-btn">
                  Back to Blogs
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  const calculateReadingTime = (content) => {
    const wordsPerMinute = 200;
    const words = content?.split(/\s+/).length || 0;
    const minutes = Math.ceil(words / wordsPerMinute);
    return minutes;
  };

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = blogPost.title;

  return (
    <>
      <Layout headerStyle={1} footerStyle={2} breadcrumbTitle={blogPost.title}>
        <section className="news-standard fix section-padding">
          <div className="container">
            <div className="news-details-area">
              <div className="row g-5">
                <div className="col-12 col-lg-8">
                  <div className="blog-post-details">
                    {/* Hero Image with Overlay Info */}
                    <div className="blog-hero-section position-relative mb-4">
                      <div className="blog-hero-image">
                        <img
                          src={`
https://admin.z.genshifter.com/${blogPost.image1}`}
                          alt="Blog Hero Image"
                          className="w-100 rounded-3"
                          style={{ height: "400px", objectFit: "cover" }}
                        />
                      </div>
                      <div
                        className="blog-meta-overlay position-absolute bottom-0 start-0 w-100 p-4"
                        style={{
                          background:
                            "linear-gradient(transparent, rgba(0,0,0,0.8))",
                          borderRadius: "0 0 12px 12px",
                        }}
                      >
                        <div className="d-flex flex-wrap align-items-center text-white gap-3">
                          <span
                            className="badge px-3 py-2"
                            style={{
                              backgroundColor: "#0e134d",
                              color: "white",
                            }}
                          >
                            <i className="fa-solid fa-clock me-1"></i>
                            {calculateReadingTime(blogPost.description)} min
                            read
                          </span>
                          <span>
                            <i className="fa-regular fa-user me-2" />
                            By Admin
                          </span>
                          <span>
                            <i className="fa-solid fa-calendar-days me-2" />
                            {formatDate(blogPost.createdAt)}
                          </span>
                          {blogPost.tag1 && (
                            <span
                              className="badge"
                              style={{
                                backgroundColor: "#ea8c06",
                                color: "white",
                              }}
                            >
                              <i className="fa-solid fa-tag me-1" />
                              {blogPost.tag1}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Blog Title */}
                    <div className="blog-header mb-4">
                      <h1
                        className="display-5 fw-bold mb-3"
                        style={{ lineHeight: "1.2", color: "#0e134d" }}
                      >
                        {blogPost.title}
                      </h1>
                    </div>

                    {/* Enhanced Quote/Overview Section */}
                    {blogPost.overview && (
                      <div className="enhanced-quote-section position-relative mb-5">
                        {/* Background Pattern */}
                        <div
                          className="quote-background position-absolute w-100 h-100 rounded-4"
                          style={{
                            background: `linear-gradient(135deg, rgba(14, 19, 77, 0.03) 0%, rgba(234, 140, 6, 0.03) 100%)`,
                            zIndex: 1,
                          }}
                        />

                        {/* Main Quote Container */}
                        <div
                          className="quote-container position-relative p-5 rounded-4 shadow-sm border"
                          style={{
                            borderColor: "#ea8c06",
                            borderWidth: "2px",
                            backgroundColor: "rgba(255, 255, 255, 0.95)",
                            zIndex: 2,
                          }}
                        >
                          {/* Large Quote Icon */}
                          <div
                            className="quote-icon-large position-absolute"
                            style={{ top: "-15px", left: "30px", zIndex: 3 }}
                          >
                            <div
                              className="quote-circle d-flex align-items-center justify-content-center rounded-circle shadow"
                              style={{
                                width: "60px",
                                height: "60px",
                                backgroundColor: "#ea8c06",
                                boxShadow: "0 4px 15px rgba(234, 140, 6, 0.3)",
                              }}
                            >
                              <svg
                                width={28}
                                height={28}
                                viewBox="0 0 36 36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0 20.3698H7.71428L2.57139 30.5546H10.2857L15.4286 20.3698V5.09247H0V20.3698Z"
                                  fill="white"
                                />
                                <path
                                  d="M20.5703 5.09247V20.3698H28.2846L23.1417 30.5546H30.856L35.9989 20.3698V5.09247H20.5703Z"
                                  fill="white"
                                />
                              </svg>
                            </div>
                          </div>

                          {/* Quote Content */}
                          <div className="quote-content pt-3">
                            <div className="d-flex align-items-center mb-3">
                              <h4
                                className="quote-label fw-bold mb-0 me-2"
                                style={{
                                  color: "#0e134d",
                                  fontSize: "0.9rem",
                                  letterSpacing: "0.5px",
                                  textTransform: "uppercase",
                                }}
                              >
                                Key Insight
                              </h4>
                              <div
                                className="quote-line flex-grow-1"
                                style={{
                                  height: "2px",
                                  background: `linear-gradient(90deg, #ea8c06 0%, transparent 100%)`,
                                }}
                              />
                            </div>

                            <blockquote className="mb-0">
                              <p
                                className="quote-text mb-3 fw-medium"
                                style={{
                                  fontSize: "1.2rem",
                                  lineHeight: "1.7",
                                  color: "#0e134d",
                                  fontStyle: "italic",
                                  marginLeft: "0",
                                  quotes: "none",
                                }}
                              >
                                "{blogPost.overview}"
                              </p>
                            </blockquote>

                            {/* Decorative Elements */}
                            <div className="quote-decorations d-flex justify-content-between align-items-center mt-4">
                              <div className="quote-dots d-flex gap-1">
                                <div
                                  className="dot rounded-circle"
                                  style={{
                                    width: "6px",
                                    height: "6px",
                                    backgroundColor: "#ea8c06",
                                    opacity: "0.8",
                                  }}
                                />
                                <div
                                  className="dot rounded-circle"
                                  style={{
                                    width: "6px",
                                    height: "6px",
                                    backgroundColor: "#ea8c06",
                                    opacity: "0.6",
                                  }}
                                />
                                <div
                                  className="dot rounded-circle"
                                  style={{
                                    width: "6px",
                                    height: "6px",
                                    backgroundColor: "#ea8c06",
                                    opacity: "0.4",
                                  }}
                                />
                              </div>

                              <div
                                className="quote-attribution text-end"
                                style={{
                                  color: "#ea8c06",
                                  fontSize: "0.85rem",
                                  fontWeight: "600",
                                  fontStyle: "normal",
                                }}
                              >
                                — Article Overview
                              </div>
                            </div>
                          </div>

                          {/* Subtle Corner Accent */}
                          <div
                            className="corner-accent position-absolute rounded-circle"
                            style={{
                              bottom: "15px",
                              right: "15px",
                              width: "8px",
                              height: "8px",
                              backgroundColor: "#ea8c06",
                              opacity: "0.3",
                            }}
                          />
                        </div>

                        {/* Additional Shadow Effect */}
                        <div
                          className="quote-shadow position-absolute w-100 h-100 rounded-4"
                          style={{
                            top: "8px",
                            left: "8px",
                            backgroundColor: "rgba(14, 19, 77, 0.08)",
                            zIndex: 0,
                          }}
                        />
                      </div>
                    )}

                    {/* Main Content */}
                    <div
                      className="blog-content mb-5"
                      style={{
                        fontSize: "1.1rem",
                        lineHeight: "1.8",
                        color: "#0e134d",
                      }}
                    >
                      <ReactMarkdown
                        components={{
                          h1: ({ children }) => (
                            <h2
                              className="h3 fw-bold mt-5 mb-3"
                              style={{ color: "#0e134d" }}
                            >
                              {children}
                            </h2>
                          ),
                          h2: ({ children }) => (
                            <h3
                              className="h4 fw-bold mt-4 mb-3"
                              style={{ color: "#0e134d" }}
                            >
                              {children}
                            </h3>
                          ),
                          h3: ({ children }) => (
                            <h4 className="h5 fw-bold mt-4 mb-2">{children}</h4>
                          ),
                          p: ({ children }) => (
                            <p
                              className="mb-3"
                              style={{ textAlign: "justify" }}
                            >
                              {children}
                            </p>
                          ),
                          ul: ({ children }) => (
                            <ul className="ps-4 mb-3">{children}</ul>
                          ),
                          ol: ({ children }) => (
                            <ol className="ps-4 mb-3">{children}</ol>
                          ),
                          li: ({ children }) => (
                            <li className="mb-1">{children}</li>
                          ),
                          blockquote: ({ children }) => (
                            <blockquote
                              className="border-start border-4 ps-3 py-2 my-4 bg-light rounded-end"
                              style={{ borderColor: "#ea8c06" }}
                            >
                              {children}
                            </blockquote>
                          ),
                        }}
                      >
                        {blogPost.description}
                      </ReactMarkdown>
                    </div>

                    {/* Additional Images Gallery */}
                    {(blogPost.image2 || blogPost.image3) && (
                      <div className="blog-gallery mb-5">
                        <h4 className="mb-4" style={{ color: "#0e134d" }}>
                          Gallery
                        </h4>
                        <div className="row g-4">
                          {blogPost.image2 && (
                            <div className="col-lg-6">
                              <div className="gallery-item">
                                <img
                                  src={`
https://admin.z.genshifter.com/${blogPost.image2}`}
                                  alt="Blog Image 2"
                                  className="w-100 rounded-3 shadow-sm"
                                  style={{
                                    height: "250px",
                                    objectFit: "cover",
                                  }}
                                />
                              </div>
                            </div>
                          )}
                          {blogPost.image3 && (
                            <div className="col-lg-6">
                              <div className="gallery-item">
                                <img
                                  src={`
https://admin.z.genshifter.com/${blogPost.image3}`}
                                  alt="Blog Image 3"
                                  className="w-100 rounded-3 shadow-sm"
                                  style={{
                                    height: "250px",
                                    objectFit: "cover",
                                  }}
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Tags and Share Section */}
                    <div className="blog-footer bg-white border rounded-3 p-4 mb-5">
                      <div className="row align-items-center">
                        <div className="col-lg-6 col-12 mb-3 mb-lg-0">
                          <h6 className="mb-3">Tags:</h6>
                          <div className="d-flex flex-wrap gap-2">
                            {blogPost.tag1 && (
                              <Link
                                href="/blogs"
                                className="badge text-decoration-none px-3 py-2"
                                style={{
                                  backgroundColor: "#0e134d",
                                  color: "white",
                                }}
                              >
                                {blogPost.tag1}
                              </Link>
                            )}
                            {blogPost.tag2 && (
                              <Link
                                href="/blogs"
                                className="badge text-decoration-none px-3 py-2"
                                style={{
                                  backgroundColor: "#ea8c06",
                                  color: "white",
                                }}
                              >
                                {blogPost.tag2}
                              </Link>
                            )}
                            {blogPost.tag3 && (
                              <Link
                                href="/blogs"
                                className="badge text-decoration-none px-3 py-2"
                                style={{
                                  backgroundColor: "#0e134d",
                                  color: "white",
                                }}
                              >
                                {blogPost.tag3}
                              </Link>
                            )}
                            {blogPost.tag4 && (
                              <Link
                                href="/blogs"
                                className="badge text-decoration-none px-3 py-2"
                                style={{
                                  backgroundColor: "#ea8c06",
                                  color: "white",
                                }}
                              >
                                {blogPost.tag4}
                              </Link>
                            )}
                          </div>
                        </div>
                        <div className="col-lg-6 col-12 text-lg-end">
                          <h6 className="mb-3">Share this post:</h6>
                          <div className="social-share-improved d-flex justify-content-lg-end gap-2">
                            <a
                              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                                shareUrl
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-sm rounded-circle"
                              style={{
                                width: "40px",
                                height: "40px",
                                backgroundColor: "#0e134d",
                                color: "white",
                                border: "1px solid #0e134d",
                              }}
                            >
                              <i className="fab fa-facebook-f" />
                            </a>
                            <a
                              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                                shareUrl
                              )}&text=${encodeURIComponent(shareTitle)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-sm rounded-circle"
                              style={{
                                width: "40px",
                                height: "40px",
                                backgroundColor: "#ea8c06",
                                color: "white",
                                border: "1px solid #ea8c06",
                              }}
                            >
                              <i className="fab fa-twitter" />
                            </a>
                            <a
                              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                                shareUrl
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-sm rounded-circle"
                              style={{
                                width: "40px",
                                height: "40px",
                                backgroundColor: "#0e134d",
                                color: "white",
                                border: "1px solid #0e134d",
                              }}
                            >
                              <i className="fab fa-linkedin-in" />
                            </a>
                            <button
                              onClick={() =>
                                navigator.share
                                  ? navigator.share({
                                      title: shareTitle,
                                      url: shareUrl,
                                    })
                                  : navigator.clipboard.writeText(shareUrl)
                              }
                              className="btn btn-sm rounded-circle"
                              style={{
                                width: "40px",
                                height: "40px",
                                backgroundColor: "#ea8c06",
                                color: "white",
                                border: "1px solid #ea8c06",
                              }}
                              title="Copy link"
                            >
                              <i className="fas fa-link" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Sidebar */}
                <div className="col-12 col-lg-4">
                  <div className="main-sidebar">
                    {/* Navigation Widget */}
                    <div className="single-sidebar-widget mb-4">
                      <div className="wid-title">
                        <h4 className="mb-4">Navigation</h4>
                      </div>
                      <div className="widget-content">
                        <Link
                          href="/blogs"
                          className="theme-btn w-100 text-center mb-3"
                        >
                          <i className="fa-solid fa-arrow-left me-2"></i>
                          Back to All Blogs
                        </Link>
                      </div>
                    </div>

                    {/* Quick Info Widget */}
                    <div className="single-sidebar-widget mb-4">
                      <div className="wid-title">
                        <h4 className="mb-4">Quick Info</h4>
                      </div>
                      <div className="widget-content">
                        <div className="info-list">
                          {/* <div className="info-item d-flex align-items-center mb-3 p-3 bg-light rounded">
                            <i
                              className="fa-solid fa-clock me-3"
                              style={{ color: "#0e134d" }}
                            ></i>
                            <div>
                              <strong>Reading Time</strong>
                              <div className="text-muted">
                                {calculateReadingTime(blogPost.description)}{" "}
                                minutes
                              </div>
                            </div>
                          </div>*/}
                          <div className="info-item d-flex align-items-center mb-3 p-3 bg-light rounded">
                            <i
                              className="fa-solid fa-calendar me-3"
                              style={{ color: "#0e134d" }}
                            ></i>
                            <div>
                              <strong>Published</strong>
                              <div className="text-muted">
                                {formatDate(blogPost.createdAt)}
                              </div>
                            </div>
                          </div>
                          <div className="info-item d-flex align-items-center mb-3 p-3 bg-light rounded">
                            <i
                              className="fa-solid fa-user me-3"
                              style={{ color: "#0e134d" }}
                            ></i>
                            <div>
                              <strong>Author</strong>
                              <div className="text-muted">Admin</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Contact CTA Widget */}
                    <div className="single-sidebar-widget">
                      <div
                        className="cta-widget text-white p-4 rounded-3 text-center"
                        style={{ backgroundColor: "#0e134d" }}
                      >
                        <h5 className="text-white mb-3">
                          Need a Custom Solution?
                        </h5>
                        <p className="mb-3">
                          Get in touch with our experts for personalized
                          business solutions.
                        </p>
                        <Link
                          href="/contact"
                          className="btn btn-sm"
                          style={{
                            backgroundColor: "#ea8c06",
                            color: "white",
                            border: "none",
                          }}
                        >
                          Contact Us
                          <i className="fa-solid fa-arrow-right ms-2"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
