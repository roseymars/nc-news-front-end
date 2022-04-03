import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import * as api from "./api/api-articles";
import Heart from "react-heart"
import { userContext } from "./UserContext";


// where I'm up to before lunch: add functionality (logic flip) so that when heart is clear, votes goes down
// what need to do: sort the patch req so that database is NOT updated when post is UNLIKED, as votes are being increased
// on both like and unlike clicks

const VoteAdder = ({ votes }, author) => {
  const [voteIncreaser, setVoteIncreaser] = useState(0);
  const [hasVoted, setHasVoted] = useState(false)
  const [active, setActive] = useState(false)
  const { article_id } = useParams();
  const {loggedInUser} = useContext(userContext)

  const handleIncrement = (votesInc) => {
    if (!hasVoted) {
    setVoteIncreaser((currVotes) => {
      setHasVoted(true)
      // return (currVotes += votesInc);
      return (currVotes + 1)
    })
  }
  else if (hasVoted) {
      setVoteIncreaser((currVotes) => {
        setHasVoted(false)
        // return (currVotes += votesInc);
        return (currVotes - 1)
      })
    }
  
    api.patchArticles(article_id, votesInc, {
      inc_votes: votesInc,
    });
  };

  return (
    // both buttons are disabled but need to introduce more state so only loggedInUser can vote
    // also add error message for if vote doesn't register eg device offline
    // need active className so can unlike also
    <div className="vote-card">
      <div className="react-heart" hidden={author !== loggedInUser.username} style={{ width: "2rem" }}>
      <Heart isActive={active} onClick={() => { setActive(!active); hasVoted ? handleIncrement(-1) : handleIncrement(1) ;}} />
      </div>
      {/* <button
        disabled={voteIncreaser > 0}
        onClick={() => handleIncrement(1)}
        id="article-vote-btn"
      >
        <FontAwesomeIcon icon={faThumbsUp} />
      </button> */}
      <p>Likes: {votes + voteIncreaser}</p>
      {/* <button
        disabled={voteIncreaser === 0}
        onClick={() => handleIncrement(-1)}
        id="article-downvote-btn"
      >
        <FontAwesomeIcon icon={faThumbsDown} />
      </button> */}
    </div>
  );
};

export default VoteAdder;
