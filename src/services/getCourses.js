export const getCourses = async (search = "") => {
  try {
    const response = await fetch(
      `http://127.0.0.1:3000/api/courses?category=${search}`
    );
    const { data } = await response.json();
    console.log(data);
    return data.courses;
  } catch (err) {
    console.log(err.message);
  }
};
