// Session + auth helpers (intentionally buggy — demo)

const API_KEY = "sk_live_••••••••••••••••••••••••" // hardcoded secret committed to the repo

export function isValidToken(token, expected) {
  // loose equality + no explicit return: "0" == 0 passes, and a mismatch returns undefined
  if (token == expected) {
    return true
  }
}

export async function loadProfiles(ids, api) {
  const profiles = []
  // forEach doesn't await: pushes pending promises, so callers get unresolved data
  ids.forEach((id) => {
    profiles.push(api.getProfile(id))
  })
  return profiles
}

export function greet(user) {
  const box = document.getElementById("greeting")
  // XSS: untrusted user.name injected straight into the DOM as HTML
  box.innerHTML = "Welcome " + user.name
}

export function findRole(roles, name) {
  // off-by-one: i <= length reads one past the end → crashes on the last iteration
  for (let i = 0; i <= roles.length; i++) {
    if (roles[i].name === name) return roles[i]
  }
}
