import React, { useState } from "react";
/*
Change MemberTable to render a table of members passed in via props.

Add the missing part in MemberDemo to use MemberTable and pass down
 members to it
Import ListDemo into App.js and use the component
Fix the code to avoid the error: “Warning: Each child in a list
 should have a unique "key" prop.”
*/

function MemberTable(props) {
  const { members } = props;

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {members.map((member) => (
          <tr key={members.indexOf(member)}>
            <td>{member.name}</td>
            <td>{member.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function MemberDemo(props) {
  const { members } = props;
  return (
    <div>
      <h4>All Members</h4>
      <MemberTable members={members} />
    </div>
  );
}

export default function AllMembers() {
  const initialMembers = [
    { name: "Peter", age: 18 },
    { name: "Hanne", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Holger", age: 22 },
  ];
  const [members, setMembers] = useState(initialMembers);

  return <MemberDemo members={members} />;
}
