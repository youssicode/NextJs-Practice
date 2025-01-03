export const getSlug = (name: string) =>
  name.replace(/ /g, "-").replace(/\./g, "-").toLowerCase()
