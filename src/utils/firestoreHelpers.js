import { doc, collection, setDoc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

// Function to register a participant
export const registerParticipant = async (
  collegeName,
  participantName,
  participantDetails
) => {
  try {
    // Dynamically set the document ID to the participant's name
    const participantRef = doc(
      db,
      "2025",
      collegeName,
      "Participants",
      participantName
    );
    await setDoc(participantRef, participantDetails);
    console.log("Participant registered successfully!");
  } catch (error) {
    console.error("Error registering participant:", error);
  }
};

// Function to register a team with two structures
export const registerTeam = async (collegeName, teamName, memberName) => {
  try {
    // 1. Store the member directly as a field in the `teamName` document (2025 -> collegeName -> Teams)
    const teamRef = doc(collection(db, "2025", collegeName, "Teams"), teamName);
    await setDoc(
      teamRef,
      { [memberName]: true },
      { merge: true }
    );

    // 2. Store team members under a dedicated path `Teams -> teamName -> memberName`
    const teamMembersRef = doc(db, "Teams", teamName);
    await updateDoc(teamMembersRef, { [memberName]: collegeName });
    console.log("Team and members registered successfully!");

  } catch (error) {
    if (error.code === "not-found") {
      
      // Team does not exist, create it with the member
      const teamMembersRef = doc(db, "Teams", teamName);
      await setDoc(teamMembersRef, { [memberName]: collegeName });
      console.log(`Team '${teamName}' created with member '${memberName}'!`);
    } else {
      console.error("Error registering team:", error);
    }
  }
};

// Function to update event data
export const updateEventData = async (eventName, participantName, participantId) => {
  try {
    // const db = getFirestore();  // Initialize Firestore
    const eventRef = doc(db, "Events", eventName);
    await setDoc(
      eventRef,
      { [participantName]: participantId },
      { merge: true }
    );

    console.log(`Participant ${participantName} registered for ${eventName}`);
  } catch (error) {
    console.error("Error registering participant:", error);
  }
};

// Function for team validation
export const validateTeam = async (teamName) => {
  try {
    // Check if the team exists and if the member is registered
    const teamRef = doc(collection(db, "Teams"), teamName);
    const teamSnapshot = await getDoc(teamRef);
    if (teamSnapshot.exists()) {
      return true;
    }
  }
  catch (error) {
    console.error("Error validating team:", error);
  }
}