import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import * as api from "./api/api-articles";
import Heart from "react-heart";
import { userContext } from "./UserContext";
import { Link } from "react-router-dom";

const VoteAdder = ({ votes, author }) => {
  console.log(author);
  const [voteIncreaser, setVoteIncreaser] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);
  const [active, setActive] = useState(false);
  const { article_id } = useParams();
  const { loggedInUser } = useContext(userContext);

  const handleIncrement = (votesInc) => {
    if (!hasVoted) {
      setVoteIncreaser((currVotes) => {
        setHasVoted(true);
        return currVotes + 1;
      });
    } else if (hasVoted) {
      setVoteIncreaser((currVotes) => {
        setHasVoted(false);
        return currVotes - 1;
      });
    }

    api.patchArticles(article_id, votesInc, {
      inc_votes: votesInc,
    });
  };

  return (
    <div className="vote-card">
      {loggedInUser.username === "" ? (
        <Link className="log-in-to-like" to={`/users`}>
          (Like this post? Log in to show your love)
        </Link>
      ) : (
        <div
          className="react-heart"
          hidden={author === loggedInUser.username}
          style={{ width: "2rem" }}
        >
          <Heart
            isActive={active}
            onClick={() => {
              setActive(!active);
              hasVoted ? handleIncrement(-1) : handleIncrement(1);
            }}
          />
        </div>
      )}
      <p>Likes: {votes + voteIncreaser}</p>
    </div>
  );
};

export default VoteAdder;
