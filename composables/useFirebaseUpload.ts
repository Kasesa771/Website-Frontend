// composables/useFirebaseUpload.ts
import { ref } from "vue";
import {
  getDownloadURL,
  ref as storageRef,
  uploadBytesResumable,
  uploadBytes,
} from "firebase/storage";
import { useNuxtApp } from "#app";

export const useFirebaseUpload = () => {
  const { $storage } = useNuxtApp(); // Access Firebase Storage instance
  const imageUrl = ref<string | null>(null);
  const uploadProgress = ref<number>(0);

  const uploadImage = async (file: File) => {
    try {
      const fileRef = storageRef(
        $storage,
        `uploads/${file.name}-${Date.now()}`
      );
      const uploadTask = uploadBytesResumable(fileRef, file);

      uploadTask.on("state_changed", (snapshot) => {
        uploadProgress.value =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      });

      await uploadTask;
      imageUrl.value = await getDownloadURL(fileRef);

      return imageUrl.value;
    } catch (error) {
      console.error("Error uploading file:", error);
      throw error;
    }
  };

  

   const uploadMultipleImages = async (files: any) => {
     const urls = [];

     for (let file of files) {
       const fileRef = storageRef($storage, 'gallery/' + file.name);
       const uploadTask = uploadBytesResumable(fileRef, file);

       // Wait for the upload to complete
       await uploadTask;

       // Get the download URL after the upload
       const downloadURL = await getDownloadURL(fileRef);
       urls.push(downloadURL);
     }
     return urls;
   };


  return { uploadImage,uploadMultipleImages, imageUrl, uploadProgress };
};
