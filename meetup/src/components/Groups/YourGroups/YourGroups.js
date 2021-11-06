import { useEffect, useState } from "react";
import YourGroupsDetails from "./YourGroupsDetails";

const YourGroups = (props) => {
  const [yourGroups, setYourGroups] = useState([]);
  useEffect(() => {
    const fetchGroups = async () => {
      const response = await fetch(
        "https://recat-meetup-project-default-rtdb.firebaseio.com/groups.json"
      );
      console.log(response);
      const data = await response.json();
      let transferData = [];
      for (const key in data) {
        transferData.push({
          id: key,
          title: data[key].title,
          description: data[key].description,
        });
      }
      console.log(transferData);
      setYourGroups(transferData);
    };
    fetchGroups();
  }, []);
  return (
    <div>
      <h4>Your Groups</h4>
      {yourGroups.map((group) => {
        return (
          <YourGroupsDetails
            id={group.id}
            title={group.title}
            description={group.description}
          />
        );
      })}
    </div>
  );
};
export default YourGroups;
