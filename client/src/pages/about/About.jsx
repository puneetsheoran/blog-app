import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
//import Posts from "../../components/posts/Posts";
//import Sidebar from "../../components/sidebar/Sidebar";
import "./about.css";
//import axios from "axios";
//import { useLocation } from "react-router";

export default function Home() {
  
  return (
    <>
      <Header />
      <div class="about">
            <div class="heading">
                <h1>About Us</h1>
            </div>
            <div class="content">
                <p>We are Students of JKLU, and we have written the easiest guide to starting a blog, so that you can start your blog today!
                </p>
              
                <p>We are lucky enough to get started working on websites in the early 2000s. This was a time when the internet was just starting to grow. This gave us the opportunity to be part of a very exciting period when things were changing really fast online.
                </p>
                <p>And you know what? It hasn’t slowed down since then. Technology keeps changing at a rapid pace.
                </p>
                <p>We have seen things come and go, but one of the things that’s stuck around without changing too much is blogging. People love to share their thoughts and ideas, and other people love to read them.
                </p>
                <div class="heading">
                <h1>What is the BloggerSpace?</h1>
                <p> </p>
                <p>The Blog Starter is a place where we can share the knowledge from our experiences starting blogs and websites. In addition to our own blogs, several of our friends and classmates have asked us to help them setup their own blogs. This happened so often that one of my friends jokingly began referring to me as “The Blog Starter”.</p>
                <p>We realized that there must be a lot of other people out there who want to start their own blogs, but just don’t know where to begin. Since We can’t help everyone personally, we decided that we would create a blog that would show people exactly how to do it, even if they had absolutely no prior experience.
                </p>
                <p>When thinking about what to call the website, we decided that our nickname would work great. So, that’s how BloggerSpace.com came to be!

                      If you want to see more from us, follow us on Instagram, Facebook, Twitter and Pinterest</p>
                </div>
            </div>
        </div>
    </>
  );
}
