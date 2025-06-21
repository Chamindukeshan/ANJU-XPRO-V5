//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU9CRk1WMnNhOEZUcW8veW5pczNOaUZpVXNxSTF3eG1DTysvaUppK1drWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibmZwejNjSGJEdnh0Q3RnTlZKSFpkcEhzTHFFREM5djlHS00wZW1MdG9HST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2QU9FTW40OHoxclE3NjVnazB2a2kxUVJiZllDdkV0MDR5VVk3ZDFUWFZ3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoZmVZbkp3WG1FMTVsSFBTV2FCZUY2NUEwTVRoSkM3TnVpalZkTWJlcTNzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9FSjdKN0tvbjZTRzFtZitXZFNjZURLU1lsYlAwdW85VXQ2YkJVb1pobVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZ6N1ltZVBpcjJVVExBUFUwTTFsaFVBaVhkV3A1Y3R2d0E1ZGM1WmtzM2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE5HeDZHUFV4a09LMmV6SDBlZGlxbUV5a1E3cEpyeXdDK083UWQwK2pGYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNU9nbERteDcwTzhjY0lJMUlIUEtDaGxOUWptaXVmbU5uOGZpNEJ3S3hHOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9hdCtsejNwV0w4Z3VmVTlyMWlRVFhKbkVUTFdxanpIYU1ud3p5RWxmZ0pPUHIzNmhpUG5uRGFMZStoSkpCckpBNzB4NjVoMGdnc3VHNkczWUEzeWh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEyLCJhZHZTZWNyZXRLZXkiOiJ4UmxTbmhRMnFPSWZjR3l3YW5DUnZ4RjU1SGZzNmtqSWs3cEh6cks4UzRBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJPM2pMUlRSOVJPcVRGa01mNFVRTDhRIiwicGhvbmVJZCI6IjE0OTdkZmEwLTRmZDUtNDAwOC05ZmU5LTAwMzc4NmQ0MTI5MiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvMXp5dUlqUlZVR0NtTGY4NXF3aFQrelZYbDg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYjB2TE1Cd3FTSTlTa283UTB2dmFnK21GeGRvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlRIOFRUQUY1IiwibWUiOnsiaWQiOiI5NDc2MDgzNTU3MDozMEBzLndoYXRzYXBwLm5ldCIsImxpZCI6Ijg2Mzg0Njk0MDAxNjk3OjMwQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSlMrNjZJR0VPZWszTUlHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUjNES3ZaZlJMZ0hPQmlQWThJNFFXV3M3ZVNjam94ZUtnaGxvWEN1SjNuTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoibFVBWWJFandBNFU3MGNHRUlXOWNKdXJXdTNDQTlodDZpd2JQZGZRajVKQlpEZ1lDQlNYMjFlNFpRR1IzemFLeGsrR3YyTUN1RG5JSTE1NmZyclpGRFE9PSIsImRldmljZVNpZ25hdHVyZSI6IjNmMWhqMnN4Tjd4clBaZ0RxQnFRTEI3c21zUVBJaHdlQ2pwS09mTWJXOEtKQ3JnNmhTMGxvaklUSndYek9WbWQ4VHRMdHkweDhUcjZvQ1hlSGE1NGp3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjA4MzU1NzA6MzBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVWR3eXIyWDBTNEJ6Z1lqMlBDT0VGbHJPM2tuSTZNWGlvSVphRndyaWQ1eiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FzSUNRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUwNTM2ODIwLCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQllHIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94760835570",
  PASSWORD: 
    process.env.PASSWORD || "Chamindukeshan",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94762652043", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
