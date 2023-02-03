import axios from "../axios";

//   A FUNCTION THAT CREATES OUR POST OBJECT
//==========================================
const postObject = async ({ course, unitCode, unitName, unitDescription }) => {
  const formData = {
    courseTitle: course,
    unitCode: unitCode,
    unitName: unitName,
    unitDescription: unitDescription,
  };

  console.log(formData);
  // REQUEST CONFIG.
  const config = {
    headers: { "Content-Type": "application/json" },
  };
  // AXIOS REQUEST.
  try {
    const response = await axios.post("/unit/new-unit", formData, config);
    return response;
  } catch (err) {
    let { data } = err.response;
    console.log(JSON.stringify(data));
  }
};

export { postObject };
