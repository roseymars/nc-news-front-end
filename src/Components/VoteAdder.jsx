import React, { useState } from "react";
import {useParams} from 'react-router-dom'
import * as api from "./api/api-articles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

const VoteAdder = ({ votes }) => {
  const [voteIncreaser, setVoteIncreaser] = useState(0);
  // const [disable, setDisable] = useState(false);
const { article_id } = useParams()
  // handle vote increment
  const handleIncrement = (votesInc) => {
    setVoteIncreaser((currVotes) => {
      return currVotes += votesInc;
    }) 
   api.patchArticles(article_id, votesInc, {
      // setVoteIncreaser((currVotes) => {
      //   return currVotes - 1;
      // });
      inc_votes: votesInc,
    });
  };



  return (
    // both buttons are disabled but need to introduce more state so only loggedInUser can vote 
    // also add error message for if vote doesn't register eg device offline
    <div className="vote-card">
      <button disabled={voteIncreaser > 0} onClick={() => handleIncrement(1)} id="article-vote-btn">
        <FontAwesomeIcon icon={faThumbsUp} />
      
      </button>
      <p>Votes: {votes + voteIncreaser}</p>
      <button disabled={voteIncreaser === 0} onClick={() => handleIncrement(-1)} id="article-downvote-btn">
      <FontAwesomeIcon icon={faThumbsDown} />
      </button>
    </div>
  );
};

export default VoteAdder;
