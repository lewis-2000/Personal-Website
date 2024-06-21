import { useState, useEffect } from "react";

interface profileType {
  name: string;
  age: number;
  id: string;
}

function CustomStuff() {
  return <h1> Custom Component</h1>;
}

function Users() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((response) => response.json())
      .then((json) => setProfiles(json))
      .catch((err) => console.error(err));

    console.log("UseEffect() running");

    return () => {
      console.log("UseEffect UnMounted");
    };
  }, []);
  return (
    <>
      <h1>Profiles</h1>
      {profiles.map((profile: profileType) => {
        {
          return (
            <pre key={profile.id} className="text-lg text-white">
              {JSON.stringify(profile)}
            </pre>
          );
        }
      })}

      <CustomStuff />
    </>
  );
}

export default Users;
