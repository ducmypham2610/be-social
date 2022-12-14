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
  }, [userId]);

  useEffect(() => {
    if (user !== null) {
      getGenderedUsers(user.gender_interest, userId)
        .then((res) => setGenderedUsers(res.data.users))
        .catch((err) => console.log(err));
    }
  },[user,genderedUsers]);

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
      updateMatches(userId,swipedUserId).then((res) => console.log(res.data)).catch((err) => console.log(err));
      // console.log(swipedUserId);
    }
  };

  const outOfFrame = (name, idx) => {
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
  };

  const swipe = async (dir) => {
    console.log(dir)
    if (canSwipe && currentIndex < genderedUsers.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
      // Set location card center bottom of screen and when swipe card rotate 180deg around x-axis
      document.getElementById("love").style.transform = "translate(0, 0) rotate(180deg)";
      document.getElementById("hate").style.transform = "translate(0, 0) rotate(180deg)";
      document.getElementById("back").style.transform = "translate(0, 0) rotate(180deg)";
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
  const calculateAge = (dob) => {
    const yearOfBirth = new Date(dob).getFullYear();
    const now = new Date().getFullYear();
    const age = now - yearOfBirth
    return age;
  }
  return (
    <>
      {filteredGenderedUsers?.map((character, index) => (
        <TinderCard
          ref={childRefs[index]}
          className="swipe"
          key={character.name}
          onSwipe={(dir) => swiped(dir, character._id, index)}
          onCardLeftScreen={() => outOfFrame(character.name, index)}
        >
          <div
            style={{ backgroundImage: `url('/img/avatar/${character.photo}')`}}
            className="card"
          >
            <div className="cardInfo">
              <h3>{character.name}, {calculateAge(character.dob)}</h3>
                {/* {character.about && character.address && (<h4>{character.address}</h4> && <p>{character.about}</p>)} */}
                {character.about && !character.address && (<p>{character.about}</p>)}
                {!character.about && character.address && (<h4>{character.address}</h4>)}
                {!character.about && !character.address && (<p>FPT Education</p>)}
                {character.address && character.about && (<h4>{character.address}</h4>)}
                {character.about && character.address && (<p>{character.about}</p>)}
            </div>
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