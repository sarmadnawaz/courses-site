export const getCourses = async (queries) => {
  try {
    let queriesArr = [];
    Object.keys(queries).forEach((query) => {
      if (queries[query]) {
        queriesArr.push(`${query}=${queries[query]}`);
      }
    });
    const coursesUrl = `http://127.0.0.1:3000/api/courses?${queriesArr.join(
      "&"
    )}`;
    console.log(coursesUrl);
    const response = await fetch(coursesUrl);
    const { data } = await response.json();
    return {
      totalCourses: data.totalCourses,
      courses: data.courses,
    };
  } catch (err) {
    console.log(err.message);
  }
};
