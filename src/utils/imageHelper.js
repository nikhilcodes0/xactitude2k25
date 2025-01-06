// src/utils/imageHelper.js

// Function to upload image as Base64 to Firestore
import { db } from "../firebase"; // Adjust the import path if necessary
import { doc, setDoc } from "firebase/firestore";

// Convert image to Base64
export const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result); // Resolves with Base64 string
    reader.onerror = (error) => reject(error); // Reject on error
  });
};

export const uploadImageToFirestore = async (file) => {
    try {
      // Check if the file is an instance of File or Blob before proceeding
      if (!(file instanceof Blob)) {
        throw new Error("Provided file is not a valid Blob or File.");
      }
  
      // Log the file type and size to make sure it's an image and not something else
      console.log("File Type:", file.type);
      console.log("File Size:", file.size);
  
      // Convert file to Base64
      const base64String = await convertToBase64(file);
  
      const imageId = file.name; // Using the filename as the image_id
  
      // Document reference in Firestore with filename as the image_id
      const imageRef = doc(db, "Transaction Images", imageId);
  
      // Save the Base64 string in Firestore
      await setDoc(imageRef, {
        image: base64String,
      });
  
      console.log("Image uploaded successfully!");
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  
