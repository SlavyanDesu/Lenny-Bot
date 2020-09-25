module.exports = (client) => {
  const activities = [
    'with Slavyan',
    'osu!',
    'with depression',
    'with members',
    'ball',
    'Nekopara',
    'PLAYERUNKNOWN\'S BATTLEGROUNDS'
  ]
  
  console.log(`${client.user.username} is online!!`);
  
  setInterval(() => {
    const index = Math.floor(Math.random() * Math.floor(activities.length - 1) + 1);
    client.user.setActivity(activities[index]);
  }, 80000); // Change playing status in 130 minutes
}
