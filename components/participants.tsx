import React from "react";

interface Props {
  heading: string;
  participants: Person[];
}

const Participants: React.FC<Props> = ({ heading, participants }) => (
  <div>
    {heading && <h3>{heading}</h3>}
    <hr />
    {participants.map((guest: { name: string; title: string }) => (
      <>
        <h4>{guest.name}</h4>
        <p>{guest.title}</p>
      </>
    ))}
  </div>
);
export default Participants;
