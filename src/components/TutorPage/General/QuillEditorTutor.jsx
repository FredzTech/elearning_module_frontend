import ReactQuill from "react-quill";
import React, { useState } from "react";

const QuillEditorTutor = () => {
  const [value, setValue] = useState("");

  return (
    <div id="unit content" className=" w-full h-full rounded-md">
      <ReactQuill
        className="px-2 pb-2 h-[300px] "
        theme="snow"
        value={value}
        onChange={setValue}
      />
    </div>
  );
};

export default QuillEditorTutor;
