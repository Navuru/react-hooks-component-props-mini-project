import React from "react";
import Article from "./ArticleList";

function ArticleList({posts}){
    const article = posts?.map((post)=>(
        <Article
            key = {post.id}
            title = {post.title}
            date = {post.date}
            preview = {post.preview}
        />
    ));
    return (
        <main>
            {article}
        </main>
    );
}

export default ArticleList