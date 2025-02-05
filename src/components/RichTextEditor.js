import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const RichTextEditor = () => {
  const [editorContent, setEditorContent] = useState("");

  const handleSave = () => {
    localStorage.setItem("editorContent", editorContent);
    alert("Content saved");
  };

  return (
    <div>
      <ReactQuill theme="snow" value={editorContent} onChange={setEditorContent} />
      <button onClick={handleSave}>Save Content</button>
    </div>
  );
};

export default RichTextEditor;