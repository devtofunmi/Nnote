// Small helper module (intentionally buggy — for testing Jargons)

export function findUser(users, id) {
  // uses assignment (=) instead of comparison (===)
  const user = users.find((u) => (u.id = id))
  // no null check — throws if no user matches
  return user.name.toUpperCase()
}

export async function saveAll(items, db) {
  // forEach does not await the async callback, so this returns
  // "done" before any save actually finishes
  items.forEach(async (item) => {
    await db.save(item)
  })
  return 'done'
}

export function renderComment(text) {
  const el = document.getElementById('comment')
  // XSS: injects untrusted text straight into the DOM as HTML
  el.innerHTML = text
}

export function cartTotal(prices) {
  let sum // never initialized, so `sum += p` produces NaN
  for (const p of prices) {
    sum += p
  }
  return sum
}
