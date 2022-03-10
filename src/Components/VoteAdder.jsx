import React, { useState } from "react";
import {useParams} from 'react-router-dom'
import * as api from "./api/api-articles";

const VoteAdder = ({ votes }) => {
  console.log(votes)
  const [voteIncreaser, setVoteIncreaser] = useState(0);
//   const [disable, setDisable] = useState(false);
const { article_id } = useParams()
  // handle vote increment
  const handleIncrement = (votesInc) => {
    setVoteIncreaser((currVotes) => {
      return currVotes + 1;
    });
    api.patchArticles(article_id, votesInc).catch(() => {
      setVoteIncreaser((currVotes) => {
        return currVotes - 1;
      });
    });
  };


  return (
    <div className="vote-card">
      <button disabled={voteIncreaser === 1} onClick={() => handleIncrement(1)} id="article-vote-btn">
        Upvote
      </button>
      <p>{voteIncreaser}</p>
      <button disabled={voteIncreaser === -1} onClick={() => handleIncrement(-1)} id="article-downvote-btn">
        Downvote
      </button>
    </div>
  );
};

export default VoteAdder;
