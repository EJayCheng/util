export function removeUndefinedFields(object: Object) {
  for (let key in object) {
    if (object[key] === undefined) {
      try {
        delete object[key];
      } catch (error) {
        console.error("Error removeUndefinedFields:", error);
      }
    }
  }
  return object;
}
