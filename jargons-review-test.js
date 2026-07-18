function getUser(id) {
  const user = users.find(u => u.id = id) // bug: = should be ===
  return user.name                        // bug: no null check if not found
}

async function saveAll(items) {
  items.forEach(async (item) => {         // bug: forEach won't await
    await db.save(item)
  })
  return 'done'
}
