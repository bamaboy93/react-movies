import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "../../services/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

import { FiAlignJustify } from "react-icons/fi";

import s from "./UserInfo.module.scss";

function Dashboard() {
  const [user] = useAuthState(auth);

  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.log("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (!user) return;
    fetchUserName();
  });

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className={s.menu}>
      <div type="button" className={s.menuButton} onClick={toggleMenu}>
        <FiAlignJustify />
      </div>
      {open && (
        <ul className={s.dropdown}>
          <div className={s.greet}>Hello {name}!</div>
          <li className={s.dropdownItem}>
            <NavLink className={s.link} to="/userlist">
              Library
            </NavLink>
          </li>
          <li className={s.dropdownItem}>
            <button type="button" className={s.button} onClick={logout}>
              Logout
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}
export default Dashboard;
