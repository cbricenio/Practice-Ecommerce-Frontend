import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";

export default function Reports() {
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem("token")
  );

  console.log(authenticated);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("token");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);

  const navigateLogin = () => {
    window.location.href = "/";
  };
  if (!authenticated) {
    navigateLogin();
  } else {
    return (
      <div>
        <Header />
        Reports
      </div>
    );
  }
}
