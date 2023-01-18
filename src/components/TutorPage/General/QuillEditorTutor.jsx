import ReactQuill from "react-quill";
import React, { useState } from "react";

const QuillEditorTutor = () => {
  const [value, setValue] = useState("");

  return (
    <div id="unit content" className="w-full h-[400px] rounded-md">
      <ReactQuill
        className="h-[400px] px-2 pb-2 "
        theme="snow"
        value={value}
        onChange={setValue}
      />
    </div>
  );
};

export default QuillEditorTutor;
