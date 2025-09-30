import React, { useState } from "react";
import { BlobServiceClient } from "@azure/storage-blob";

function Documents() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");

  const uploadFile = async () => {
    if (!file) return;
    try {
      setStatus("Uploading...");
      const blobService = BlobServiceClient.fromConnectionString(
        process.env.REACT_APP_AZURE_STORAGE_CONNECTION
      );
      const containerClient = blobService.getContainerClient("cms-docs");
      const blockBlobClient = containerClient.getBlockBlobClient(file.name);
      await blockBlobClient.uploadBrowserData(file);
      setStatus("Upload successful: " + file.name);
    } catch (err) {
      console.error(err);
      setStatus("Upload failed");
    }
  };

  return (
    <div>
      <h1>Documents Module (Azure Blob Storage)</h1>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={uploadFile}>Upload</button>
      <p>{status}</p>
    </div>
  );
}

export default Documents;