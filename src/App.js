import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UploadImages from "./components/upload-files.component";

function App() {
  return (
    <div className="container text-center">
      <h1>Face Swap</h1>
      <h4>Choose two images to be swapped:</h4>

      <div className="content text-center">
        <UploadImages />
      </div>
    </div>
  );
}

export default App;
