import React from "react";
import { blogsData } from "../pages/BlogsData";

const RecentPost = () => {
  return (
    <>
      <div className="col-lg-4 col-md-12 sidebar mt-5 mt-lg-0">
        {/* recent post start */}
        <div className="widget recent-post">
          <h5 className="widget-title">Recent Post</h5>
          {blogsData.slice(0, 3).map((blog) => (
            <article key={blog.id}>
              <div className="row mt-4">
                <div className="col-sm">
                  <img src={blog.img} className="img-fluid" alt={blog.title} />
                </div>
                <div className="col-sm-9 mt-3 mt-sm-0">
                  <a href={`/blogs/${blog.path}`}>{blog.title}</a>
                  <div className="post-date">
                    {blog.fullDate.date} <span>{blog.fullDate.monthYr}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        {/* recent post end */}
      </div>
    </>
  );
};

export default RecentPost;
