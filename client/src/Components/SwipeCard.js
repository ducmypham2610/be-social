import React, { useState, useMemo, useRef, useEffect } from "react";
import TinderCard from "react-tinder-card";
import { getUser, getGenderedUsers, updateMatches } from "../services/userService";
import Nope from '@mui/icons-material/Clear';
import Love from '@mui/icons-material/Favorite';
import Back from '@mui/icons-material/SettingsBackupRestore';
import { Fab } from '@mui/material';
function SwipeCard() {
  const userId = localStorage.getItem("UserId");
  const [user, setUser] = useState(null);
  const [genderedUsers, setGenderedUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(genderedUsers.length - 1);
  const [lastDirection, setLastDirection] = useState();
  const currentIndexRef = useRef(currentIndex);

  useEffect(() => {
    getUser(userId)
      .then((res) => setUser(res.data.user))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (user !== null) {
      getGenderedUsers(user.gender_interest, userId)
        .then((res) => setGenderedUsers(res.data.users))
        .catch((err) => console.log(err));
    }
  });

  const childRefs = useMemo(
    () =>
      Array(genderedUsers.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < genderedUsers.length - 1;

  const canSwipe = currentIndex >= 0;

  // set last direction and decrease current index
  const swiped = (direction, swipedUserId, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
    if (direction === "right") {
      updateMatches(userId,swipedUserId);
      // console.log(swipedUserId);
    }
  };

  const outOfFrame = (name, idx) => {
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < genderedUsers.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };
  const matchedUserIds = user?.matches
    .map(({ user_id }) => user_id)
    .concat(userId);
  const filteredGenderedUsers = genderedUsers?.filter(
    (genderedUser) => !matchedUserIds.includes(genderedUser._id)
  );
  return (
    <>
      {filteredGenderedUsers?.map((character, index) => (
        <TinderCard
          ref={childRefs[index]}
          className="swipe"
          key={character.name}
          onSwipe={(dir) => swiped(dir, character.name, index)}
          onCardLeftScreen={() => outOfFrame(character.name, index)}
        >
          <div
            style={{ backgroundImage: `url('/img/avatar/${character.photo}')`}}
            className="card"
          >
            <h3>{character.name}</h3>
          </div>
        </TinderCard>
      ))}
      <div className="icons">
        <Fab
          id="hate"
          sx={{ bgcolor: "#FFF", color: "#F27121" }}
          onClick={() => swipe("left")}
          aria-label="hate"
        >
          <Nope />
        </Fab>
        <Fab
          id="love"
          sx={{
            bgcolor: "#E94057",
            color: "#FFF",
            width: 70,
            height: 70,
            margin: 5,
          }}
          onClick={() => swipe("right")}
          aria-label="like"
        >
          <Love />
        </Fab>
        <Fab
          sx={{ bgcolor: "#FFF", color: "#8A2387" }}
          onClick={() => goBack()}
          aria-label="back"
        >
          <Back />
        </Fab>
      </div>
    </>
  );
}

export default SwipeCard;
