export const getCategories = async () => {
  try {
    const response = await fetch(`http://127.0.0.1:3000/api/categories/`);
    const { data } = await response.json();
    return data.categories;
  } catch (err) {
    console.log(err.message);
  }
};
