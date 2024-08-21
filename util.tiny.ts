export const getUserName = () => {
  const meta1 = document.querySelector('meta[property="profile:username"]')
  if (meta1) {
    const userName = meta1.getAttribute("content") || ""
    return userName
  }
  const meta2 = document.querySelector('meta[name="user-login"]')
  if (meta2) {
    const userName = meta2.getAttribute("content") || ""
    return userName
  }
  return ""
}
