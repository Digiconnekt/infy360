import React from "react";
import { Helmet } from "react-helmet-async";
import TitleSection from "../components/Title";
import RecentPost from "../components/RecentPost";
import { blogsData } from "./BlogsData";

const Blogs = () => {
  return (
    <>
      <Helmet>
        {/* Title */}
        <title>
          Explore the Insights From Leading Internet Marketing Agency in USA &
          Canada
        </title>

        {/* Description */}
        <meta
          name="description"
          content="Explore innovative insights and strategies on Brandnest's blogs, your go-to resource for online advertising excellence. Elevate your brand with the top internet marketing agency in USA and India."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="digital marketing blog, digital marketing news, seo tips, social media blog, content marketing blog"
        />

        {/* Author */}
        {/* <meta name="author" content="www.themeht.com" /> */}
      </Helmet>

      {/* title section start */}
      <TitleSection title="Blogs" />
      {/* title section end */}

      {/* page content start */}
      <div className="page-content">
        <section>
          <div className="container">
            <div className="row">
              {/* right side content start */}
              <div className="col-lg-8 col-md-12 order-lg-1">
                {/* blog start */}
                {blogsData.map((blog) => (
                  <div key={blog.id} className="blog-classic">
                    <div className="post">
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
                          <span>{blog.fullDate.monthYr}</span>
                        </div>
                        <div className="post-title">
                          <h5>
                            <a href={`blogs/${blog.path}`}>{blog.title}</a>
                          </h5>
                        </div>
                        <p>
                          {blog.content}{" "}
                          <a href={`blogs/${blog.path}`}>read more</a>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                {/* blog end */}
              </div>
              {/* right side content end */}

              {/* left side content start */}
              <RecentPost />
              {/* left side content end */}
            </div>
          </div>
        </section>
      </div>
      {/* page content end */}
    </>
  );
};

export default Blogs;
