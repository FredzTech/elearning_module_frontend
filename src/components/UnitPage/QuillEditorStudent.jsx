import ReactQuill from "react-quill";

import React, { useState } from "react";

const QuillEditorStudent = () => {
  return (
    <div
      id="unit content"
      className="w-full h-[800px] rounded-md p-2 border-2 border-slate-400 overflow-y-scroll"
    >
      <h1 className="font-bold underline">
        INTRODUCTION TO DISCRETE MATHEMATICS
      </h1>

      <p className="mt-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
        minima? At harum quis asperiores enim recusandae dolores laborum natus
        fugiat quia autem consequuntur eos officia quam, qui, illo, tempora
        voluptatum.
      </p>

      <p className="mt-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
        minima? At harum quis asperiores enim recusandae dolores laborum natus
        fugiat quia autem consequuntur eos officia quam, qui, illo, tempora
        voluptatum.
      </p>

      <h1 className="font-bold underline py-2">NEW CONCEPT</h1>

      <p className="mt-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
        minima? At harum quis asperiores enim recusandae dolores laborum natus
        fugiat quia autem consequuntur eos officia quam, qui, illo, tempora
        voluptatum.
      </p>
    </div>
  );
};

export default QuillEditorStudent;
