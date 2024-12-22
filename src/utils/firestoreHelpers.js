import { doc, collection, setDoc, updateDoc, getDoc, getDocs } from "firebase/firestore";
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

export const updateEventData = async (eventName, participantName, participantDetails) => {
  try {
    const { id, teamName, wNo } = participantDetails; // Correctly extract teamName from participantDetails

    const eventRef = doc(db, "Events", eventName);

    // Use participantName as the key and store the details as a map
    await setDoc(
      eventRef,
      {
        [participantName]: {
          id: id,      // Participant ID
          team: teamName || null, // Use teamName or null if not provided
          wNo: wNo || "Unknown Number", // Use a default value for wNo if undefined
        },
      },
      { merge: true } // Merge with existing data
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

// Function for generating a unique participant ID
export const generateParticipantId = async (collegeName) => {
  try {
    // Extract the first letter of each word in the college name
    const collegeKey = collegeName
      .split(" ")
      .map(word => word.charAt(0).toUpperCase())
      .join("");

    const participantsRef = collection(db, "2025", collegeKey, "Participants");

    // Get the number of existing participants
    const participantsSnapshot = await getDocs(participantsRef);
    const count = participantsSnapshot.size;

    // Generate the ID
    const paddedCount = String(count + 1).padStart(2, "0");
    return `XACT${collegeKey}${paddedCount}`;
  } catch (error) {
    console.error("Error generating participant ID:", error);
    throw new Error("Failed to generate participant ID");
  }
};