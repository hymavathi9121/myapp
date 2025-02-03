import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import styles for React Quill

const RichTextEditor = () => {
    const [editorContent, setEditorContent] = useState('');

    const handleChange = (value) => {
        setEditorContent(value);
    };

    return (
        <div>
            <ReactQuill value={editorContent} onChange={handleChange} />
        </div>
    );
};

export default RichTextEditor;
