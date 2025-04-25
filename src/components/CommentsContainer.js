import React from "react";
import { USER_ICON } from "../utils/constants";

const commentsData = [
  {
    name: "Ananya Sharma",
    text: "Bhai, this project is next level! UI is totally on point 🔥",
    replies: [
      {
        name: "Rohan Verma",
        text: "Haan yaar, I was thinking the same. Smooth transitions and neat layout!",
        replies: [
          {
            name: "Sneha Iyer",
            text: "Perfect for a mini project submission too 😍",
            replies: [
              {
                name: "Karthik Menon",
                text: "Can we also make it mobile responsive? That would be epic!",
                replies: [
                  {
                    name: "Pooja Desai",
                    text: "Already tried it! Works great on my phone!",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Amit Patel",
    text: "Solid effort! Explained each step so clearly. Subscribed instantly!",
    replies: [],
  },
  {
    name: "Meera Joshi",
    text: "Animations are lit 🔥 Especially the comment fade-in!",
    replies: [
      {
        name: "Arjun Kulkarni",
        text: "Exactly! Felt like a real YouTube clone 💯",
        replies: [],
      },
      {
        name: "Neha Reddy",
        text: "Using this as a reference for my internship task 😅",
        replies: [],
      },
    ],
  },
  {
    name: "Rajeev Nair",
    text: "Just bookmarked this video. Too good to ignore!",
    replies: [
      {
        name: "Ishita Banerjee",
        text: "I’m learning React, and this helped a lot!",
        replies: [
          {
            name: "Siddharth Bhatia",
            text: "Same here. Gonna try building my own version of this now.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Tanvi Chawla",
    text: "Let's support such great content creators from India 🇮🇳",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img className="w-8 h-8" alt="user" src={USER_ICON} />
      <div>
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 ml-5 border border-l-black">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
