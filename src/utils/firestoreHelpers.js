import { doc, collection, setDoc, updateDoc, getDoc, getDocs, arrayUnion } from "firebase/firestore";
import { db } from "../firebase";

// Function to register a participant
export const registerParticipant = async (
  collegeName,
  participantName,
  participantDetails
) => {
  try {
    // Reference to the college document in Firestore
    const collegeRef = doc(db, "2025", collegeName);

    // Check if the college document already exists
    const collegeDoc = await getDoc(collegeRef);
    if (!collegeDoc.exists()) {
      // Create the college document with initial structure
      await setDoc(collegeRef, {}); // Initialize empty college document
    }

    // Reference to the participant document in Firestore
    const participantRef = doc(
      db,
      "2025",
      collegeName,
      "Participants",
      participantName
    );

    // Check if the participant document already exists
    const participantDoc = await getDoc(participantRef);

    if (participantDoc.exists()) {
      // Append new teamName and events to existing arrays
      await updateDoc(participantRef, {
        teamName: arrayUnion(participantDetails.teamName),
        events: arrayUnion(...participantDetails.events),
      });
    } else {
      // Create a new participant document
      await setDoc(participantRef, participantDetails);
    }

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

// Function to generate a unique participant ID
export const generateParticipantId = async (collegeName) => {
  try {
    // Reference to the CollegeLetters collection
    const collegeLettersRef = collection(db, 'CollegeLetters');

    // Get all colleges and check if the college already has an assigned letter
    const collegeSnapshot = await getDocs(collegeLettersRef);
    let collegeLetter;
    const usedLetters = collegeSnapshot.docs.map(doc => doc.data().letter);

    // If the college already has a letter, return it
    const existingCollegeDoc = collegeSnapshot.docs.find(doc => doc.id === collegeName);
    if (existingCollegeDoc) {
      collegeLetter = existingCollegeDoc.data().letter;
    } else {
      // Assign the next available letter
      const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const availableLetters = letters.split('').filter(letter => !usedLetters.includes(letter));

      if (availableLetters.length === 0) {
        throw new Error('No available letters for new colleges');
      }

      collegeLetter = availableLetters[0];

      // Assign the letter to the new college
      const newCollegeRef = doc(collegeLettersRef, collegeName);
      await setDoc(newCollegeRef, { letter: collegeLetter });
    }

    // Reference to the Participants collection for the specific college
    const participantsRef = collection(db, '2025', collegeName, 'Participants');

    // Get the current count of participants
    const participantsSnapshot = await getDocs(participantsRef);
    const count = participantsSnapshot.size;

    // Generate the participant ID
    const paddedCount = String(count + 1).padStart(2, '0');
    return `XACT${collegeLetter}${paddedCount}`;
  } catch (error) {
    console.error('Error generating participant ID:', error);
    throw new Error('Failed to generate participant ID');
  }
};