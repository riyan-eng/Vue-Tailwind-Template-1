function getTodo() {
  const response = fetch("https://dummyjson.com/todos?limit=3&skip=10");
  return response
}

export { getTodo };
