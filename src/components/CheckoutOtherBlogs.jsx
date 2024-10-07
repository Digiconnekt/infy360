import React from "react";
import { blogsData } from "../pages/BlogsData";

const CheckoutOtherBlogs = ({ id }) => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8 col-md-12">
              <div className="section-title">
                <h2 className="title">Checkout Our Other Blog's</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {blogsData
              .filter((blog) => blog.id !== parseInt(id))
              .slice(0, 3)
              .map((blog) => (
                <div className="col-lg-4 col-md-12 mt-5 mt-lg-0" key={blog.id}>
                  <div className="post style-2">
                    <div className="post-image">
                      <img
                        className="img-fluid h-100 w-100"
                        src={blog.img}
                        alt={blog.title}
                      />
                    </div>
                    <div className="post-desc">
                      <div className="post-date">
                        {blog.fullDate.date}{" "}
                        <span> {blog.fullDate.monthYr}</span>
                      </div>
                      <div className="post-title">
                        <h5>
                          <a
                            href={`/blogs/${blog.title
                              .toLowerCase()
                              .replace(/ /g, "-")}`}
                          >
                            {blog.title}
                          </a>
                        </h5>
                      </div>
                      <p>{blog.content.substring(0, 100) + "..."}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckoutOtherBlogs;
