import { useState } from "react";
import axios from "axios";

const useImageUpload = () => {
    const [imageUrl, setImageUrl] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const uploadImage = async (file) => {
        const imageHostingKey = "34874f7d3bab64083d0fa7ab16b13bb3";
        const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

        setIsLoading(true);
        setError(null);

        try {
            const formData = new FormData();
            formData.append("image", file);

            const response = await axios.post(imageHostingUrl, formData);

            if (response.status === 200) {
                const uploadedUrl = response.data.data.url;
                setImageUrl(uploadedUrl); 
                return uploadedUrl; 
            } else {
                throw new Error("Failed to upload image");
            }
        } catch (err) {
            setError(err.message || "An error occurred while uploading the image");
            console.error("Image Upload Error:", err);
            return null;
        } finally {
            setIsLoading(false);
        }
    };

    return {
        uploadImage,
        imageUrl,
        isLoading,
        error,
    };
};

export default useImageUpload;
