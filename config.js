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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUFId0xVVHBQTTYxSXJRdm1rYkVQemp1a0lndTRDMUUxRit4QTgxNS9YOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT3FnbUtlUXd3aTEyYThVVTFKS1FFaHVBbHROcjNhNkJEdWl0UUllelB4OD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2RlJmSDV5YkIzTWJnd091UERnTWtaY0ZaRStELzZ0UnVlZExtN1R3QWxJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDbExJM3ZYRjFRWTFOQUR6Yjd3VkE3NEZlYjJnY0EvUXI2dHkyYXZMbGs4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVCcmtSNDhHUTFGdXFqVTZIcjlGK3diSHNzQzNLb09iUVJLN1JjS1J6MFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImIwbkkrSHk0Z09jSXBubGVVSTkvVXBRUms1cWxycXUzd0gxb09wWWRzVm89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE5ubWpjTzVtdG12TmU0UDFPenM2OWFUNVFIQXJhdmZkTG9hbThsZmdFVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaHYvYldIeUo3WDBCMG1Pa1JNVzhqVndadTR4ekp5MlozNHRvRXlFcWMxOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilg4MkJzS3pBM3R1L2l3c0xUQklxOTkwZXRpNWVHeURPRUtJdWUxWW9jYmdkY3MwTlBTRk54RnRBQ0sxbHNUdElHQjFMZ2lMYzdpQ1NHQ05laTd0emp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE2LCJhZHZTZWNyZXRLZXkiOiJyVU8xZEE3cUxQb0VvSkR3R1FCa1AwRnc4ZGJNeFR0OHRWOCtIMnA3eFdZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ3QktQUWpSZ1RNV0pINVFRVFVkRVdBIiwicGhvbmVJZCI6ImIwOTdmMzJhLTg5YzMtNGNhYy04ZmJhLTQwMmZiYjk1ZTMwMiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrVGZBUGI0SGdnQUZMSjlOUFM2cWYrMi9pNzg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS1V1OG10MTN5OFB3MDNXVDBoTi9BNzVab1d3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjZWOTMxTjRZIiwibWUiOnsiaWQiOiIyMzQ5MDczMzE1NjQxOjEyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuGVmeKBoCjigaDCoOKBoMKg4oGg4oCi4oGgwqDigaDigL/igaDCoOKBoOKAouKBoMKg4oGgwqDigaAp4oGg4ZWXIE9sYW1pbGVrYW4g4ZWZ4oGgKOKBoMKg4oGgfuKBoMKg4oGgLuKBoMKg4oGgfuKBoMKg4oGgKeKBoOGVlyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSy84c0s0QkVMM0k2N29HR0FzZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiM3l4elA3ZG14UjNJdnJqM2hrOHpIUWNRcm1GazhFSWdrdC9SZ1BjelR4QT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiOEN6ZGxXWDlKajBWa2VlbHZROHRadncyV0NRc1NZSk9JMEI1T00yRUg5OHJLT256anpFMm5EaVZmZ0UxYXZuRmpPcFY2L0NqTWZiTEJOTm4wWVN2QUE9PSIsImRldmljZVNpZ25hdHVyZSI6IjhTR256cUtMWmZVZ2RVUEJsU2d4VU91UFl2ZlU2WXlvSkU1bkYzR1h4bnlUSXdlclJLYnQzTnlQNkR6Y2tTOXhlWkVHRXZ6WTljSmovWUE0aDgwQ2h3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTA3MzMxNTY0MToxMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkOHNjeiszWnNVZHlMNjQ5NFpQTXgwSEVLNWhaUEJDSUpMZjBZRDNNMDhRIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM0MDA5OTMyfQ==" // session id here
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
