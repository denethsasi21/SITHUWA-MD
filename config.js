const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '94786254229'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://SithumKalhara:97531@cluster0.iva7dbo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'Sithumkalhara271@gmail.com'
global.github = 'https://github.com/Sithuwa/SITHUWA-MD'
global.location = 'Sri Lanka'
global.gurl = 'https://instagram.com' // add your username
global.sudo = process.env.SUDO || "94786254229"
global.devs = '94761516805';
global.website = 'https://github.com/Sithuwa/SITHUWA-MD' //wa.me/+94000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/15b1dd8aeaa47888d75d7.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "SITHUWA-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRVBIZFQwcDg2VS9JTG1HbmFKdWpwRHlXQVB3UnovU2FGYTA1N3RvZnlGMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia2VhcGRKcU9VckQvM2ZBdnpaMkd4cmM1eWNYaVJaOWR1VTcxeFFXV2lYbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLTkhvRC80Ri9WRURKSU5SNTU0QmdXcjVQcFlicll0bGVNTVd0NXdyT0hrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3WDF0eUxvcVBFL0ZUR2llZXV1Vys0TEJ1bUdvdHE3bmY1THBLWExUTkh3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldKQ0FpOWJrYmdBYWZ0czJ0Yml5T0dWSTVIeEFIb1JkUk9LOWpiVlJobVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1IOXROWkxIODFuS2E4RnNWUmJnYnZBUEhPVFI4MjB6ZjE2N1ZVQ0M1amc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEVDN2ZwenhMQU9yR1hSMGRNbjJNSDdLcWlVUDlISmNNU1k1RXZvamNGRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWFVybUFwckZmZ2Y3TWNIak9ENWtyZkx6L2xXNkxHempTUFFrQ0pLZG5FST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1QMjgyc2s2NTVvVkxZdGNmVlRpMGJGSlpvbWVvU1N1bW0xMnp6TWttU3g0TGlPTE90eUlVQk9LeTN0MjNENk1tQ2YwQkthbEl2Y2pyMkUwNjN4WEFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MywiYWR2U2VjcmV0S2V5IjoiaUdnR0lWc25hZEVGNjZNbFkrUmJidUJ1S0RPcUFCMVZxOUpwdHlZdFhaZz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiI5NDc4NjI1NDIyOUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIwNTZDOTVGQTBGNEU3RTQ5QTA3MTIxNEZFMjA5OEVCMiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzA5Mzc5NTI3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5NDc4NjI1NDIyOUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJENzVBQkREMTU2MzI4QjM2QkQzMzlFMUE2QkVBMzM0QSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzA5Mzc5NTI3fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJQT0RjYUNvR1FqNjRLeWNndDdtaG1BIiwicGhvbmVJZCI6IjM0ZTIxNzg4LTBlZjEtNDk2Ni05ZmRmLTY2YWJjNzNkNTk2ZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJib2V3ZWx4aHFoYjg3K25kNXQzY1hUckc3K1U9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhMQm9FNDlZTkJUbndpcUpnM240bWljRHlOWT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tTMTJNb0ZFTU9maks4R0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjNsY2JWa2o5UmN0Ym54bEpDclVyOHRQSnM2Uy9Wakc4dHQyT0tMNk5pbnc9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im9rRWJkNVkwb1FsWTFLbDdwbjRVUUdLb1dTVWxuRnlMclRKRnhZcFNWa2xRUE1SbUd6cWdGRHlYYzk4amRxd3N3TTk5ejQrOWtJT1Y4YmFPM3dFZEJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJpUGt6WWJCNXRwQVVnUk5rNENBTUVVUXhlRXNwdTFpR2VibHpSb2xTdTBNNjAxMkREN0RjS0lhQUVpOXFiYTZ2R1FvaklPd1pkaWRta3UzZE40RzhCZz09In0sIm1lIjp7ImlkIjoiOTQ3ODYyNTQyMjk6MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwn4y5In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzg2MjU0MjI5OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZDVYRzFaSS9VWExXNThaU1FxMUsvTFR5Yk9rdjFZeHZMYmRqaWkrallwOCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwOTM3OTUyNiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGMm4ifQ==",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'SITHUWA BOT',
  packname:  process.env.PACK_NAME || 'MADE BY DARK SASIYA',
  
  botname:   process.env.BOT_NAME === undefined ? "DARK-SASIYA" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'DARK-SASIYA' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱɪᴛʜᴜᴡᴀ-ᴍᴅ•* ",   //*『sᴜʙsᴄʀɪʙᴇ • ʙʟᴀᴅᴇ ᴛᴇᴄʜ』*\n youtube.com/@blade444"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'sithuwa-md',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
