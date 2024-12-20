//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Nikka-v3";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349073315641";
global.owner = process.env.OWNER_NUMBER || "2349073315641";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUUvTXNIZGZuNC9keHh5NE1vK0FiVHI1d3Q3NFVuaXY5MzArK2lOVHdHYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0hYeWhVM0VaSTdRSkRWRTgxK3FtRmM0T3JjSm1OSUVCZ0xJbXlNZDhqWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhSW9HQy96RFJqSlpZVDJ0d1lScFZNL0EyVlpWR09kVUhpTEgwb0c5NzBZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxWW9veE1qelVrTUNNcTYyK3Y1bHBVc2twdmZ2NGFWNkFPanFNRUljbmlFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldJYU5aRVpnU2NacWswZmpMdENmOEV2bWxKWUpySlduRTZxdEk1R1V4MTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpHVEhTbUpsUUZvbEt4dE1FY2xIYzI2RTRiTEVjK05MOEt4R3RiQW1iVEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRU9oYTFyajh2MzYwWnZoWU9PL3dYZHl5M1REVkpCQ2ViS244NWNpanJFaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYlEyUSs2ZjVlbVE4ZHp3alU5V01qNSt0WXUxdUt5OCtXUlJxZHJ5eHp5RT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZjbHAxSk9xZlJCZEpBYSthakpUMWhsOHpMU090ekVKb2RHNS9idkdJWTNRQ3FmVVZINlQyZUxpK1NYb1JWZDNKNkdPUWZoSWpiaEdwQ2pMdE5vWmp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM5LCJhZHZTZWNyZXRLZXkiOiJjeThXNnJEcnBBYU9yblUxZy9HSFlHc1BMdFZUTE95cUV2cTZROTUxNzBrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJCczRsYWtBWlNTNlByY1Azc2FRY1RRIiwicGhvbmVJZCI6ImQ5ODQ1N2UzLTUzOGQtNGI3OC1iODBlLTY3NjM0MDVlNjFmMiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvZDViaWZCakRNRFdITEpYZURLVFNLSnJyRkE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaHNJT1JRSEdSQ0t3YU1NSDlsNnEvN1ErNmVJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkRCUks1NTRMIiwibWUiOnsiaWQiOiIyMzQ5MDczMzE1NjQxOjE4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkJPwnZCH2LknJyDwnZCA8J2QpfCdkKnwnZCH8J2QmiDigIog8JKAseqqsyDwkoWSIPCSgLHqqrMg8JKFkiDwkoCx6qqzIPCShZIg8JKAseqqsyDwkoWSIPCSgLHqqrMg8JKFkiDwkoCx6qqzIPCShZIg8JKAseqqsyDwkoWSIPCSgLHqqrMg8JKFkiDwkoCx6qqzIPCShZIg8JKAseqqsyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTEg4c0s0QkVQT3hsTHNHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiM3l4elA3ZG14UjNJdnJqM2hrOHpIUWNRcm1GazhFSWdrdC9SZ1BjelR4QT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiYWtacVNFR043ZHFxVysrbE9EWktXVmczWHlSVlFIazFiSkhlZ29mVXIxN2tobGt4RFNJT05QU0t6M3FONTRrMWd3TXZtU3JSRzRTUzJBYUtJRktzRGc9PSIsImRldmljZVNpZ25hdHVyZSI6IlRwWFhScEZMTWFvam85SWZEa2hrNHg5aXJHemhHMVFRSlAyTzZXRVlwZlc2OTJIZUhzT1ZlTHpLc2JJOFhzSWhDVWdRZWFZS2ppTXlGVWN6cDA4M2pBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTA3MzMxNTY0MToxOEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkOHNjeiszWnNVZHlMNjQ5NFpQTXgwSEVLNWhaUEJDSUpMZjBZRDNNMDhRIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM0Njc4Nzg0fQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "Olamilekan bot",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
