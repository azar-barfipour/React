import { useEffect, useState } from "react";
import QuoteList from "../components/QuoteList";

const AllQuotes = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const fetchQuote = async () => {
      const response = await fetch(
        "https://test-router-bbd5a-default-rtdb.firebaseio.com/quote.json"
      );
      const data = await response.json();
      let transferData = [];
      for (const key in data) {
        transferData.push({
          id: key,
          text: data[key].text,
          author: data[key].author,
        });
      }
      setQuotes(transferData);
    };
    fetchQuote();
  }, []);

  return (
    <div>
      <h1>All Quotes Page</h1>
      <QuoteList quotes={quotes} />
    </div>
  );
};

export default AllQuotes;
