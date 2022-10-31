import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import NavInshorts from "./components/NavInshorts";

function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadmore, setLoadmore] = useState(20);

  const API_KEY = "a17bc6ce27b243eb9ab7b70a6cfd0298";

  const newsApi = async () => {
    try {
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}&pageSize=${loadmore}&category=${category}`
      );
      if (news) {
        setNewsArray(news.data.articles);
        setNewsResults(news.data.totalResults);
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  useEffect(() => {
    newsApi();
  }, []);

  console.log("log:", newsArray);
  console.log("log:", newsResults);
  return (
    <div className="App">
      <NavInshorts setCategory={setCategory} />
    </div>
  );
}

export default App;
