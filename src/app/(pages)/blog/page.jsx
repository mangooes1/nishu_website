// pages/index.js
"use client";
import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import Navbar from "@/app/components/Navbar";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  async function generateAnswer(e) {
    e.preventDefault();
    setGeneratingAnswer(true);
    setAnswer("Loading your answer... \n It might take up to 10 seconds");

    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDDXsvWql52v0BmHH7ZZjVfrQET0UcAmik`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });

      setAnswer(
        response?.data?.candidates[0]?.content?.parts[0]?.text ||
          "Sorry - Something went wrong. Please try again!"
      );
    } catch (error) {
      console.error(error);
      setAnswer("Sorry - Something went wrong. Please try again!");
    }

    setGeneratingAnswer(false);
  }

  return (
    <> 
    <Navbar />
    <div className="bg-dark h-screen p-6">
      <form
        onSubmit={generateAnswer}
        className="w-full md:w-2/3 m-auto text-center rounded bg-gray-50 py-2"
      >
        <h1 className="text-3xl text-center">Smart Answers:</h1>
        <textarea
          required
          className="border rounded w-11/12 my-2 min-h-fit p-3"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask anything"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-300 p-3 rounded-md hover:bg-blue-400 transition-all duration-300"
          disabled={generatingAnswer}
        >
          Generate answer
        </button>
      </form>
      <div className="w-full md:w-2/3 m-auto text-center rounded bg-gray-50 my-1">
        <ReactMarkdown className="p-3">{answer}</ReactMarkdown>
      </div>
    </div>
    </>
   
  );
}
