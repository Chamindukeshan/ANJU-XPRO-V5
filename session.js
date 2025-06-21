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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUURLWDdDL3NvTnJqVlh2VEI2VTNndUQ4SXI0VkxoVkQyaHZYbTA0bGZFbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVHQ5WXkvWEMxeEQxcnRDRVNxWFVTK0NHV1IyWmp5TFI0K2xsM2pHMkVGOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3RW5jWmVtdkhUN1ZCVUVOUGRWKzNDaytEWnlvQ1ZKU3FLeGJqd0lhYkhRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNc1lPMXlXT0hoMVJ6T21aRTFrS2VOektSRjhZWWdLbElqT2dENWJGVEdzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVMVDM4NEJQRzJocXAvMHNvM0dTVXdQWm9CRGQ3NFdpcEppR1ZDYXBNbmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlExNUlPOGMxYXJ1R1B6azg0bUJobWhUaXNOellNZlBWTVpzQmFwOWxGejg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUZ0WlJXTFM1WXlxQVZ4cHM0WG5vYXNaZkQwNExhRjFXaFZwdE1IektsQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVc5emtxUDJWaHNwTzZJaUhLUkV4Z2VqVkVvTjlnTnZYUHRLbldIYytBdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImwwNVpFNDI0QTlPczBJWmp2TnJEaWJYOVMzbFlRdFBrRUVIZGtEWHpudU55Y29Rakt1WVM0OFgyTFJyUS8rbVZiaWpzQ2g3S2czV0pucUttY1VMS2pRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM2LCJhZHZTZWNyZXRLZXkiOiJVU3l1SnVueXJneXNoZnpPbG9FOVJzeFREUDhDV1lnMzRvNUVhZktBdk8wPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJiQXhENXZxNVNWZUtRUTF5Yy1qMFVBIiwicGhvbmVJZCI6IjdkMzcyMTI3LWU1ZGMtNDM4Yy1iZDdkLTUzYjVkOGE4NTJkNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHbENNVFczMDB0bVR1ZEFVejQ4OGF1MndPYnc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV2x0WWVrb1ljQ0dWQ0I4bVh2VDNhUlpwU2k4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlFBMVJFNTlOIiwibWUiOnsiaWQiOiI5NDc2MDgzNTU3MDoyOUBzLndoYXRzYXBwLm5ldCIsImxpZCI6Ijg2Mzg0Njk0MDAxNjk3OjI5QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSlMrNjZJR0VPR2EzTUlHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUjNES3ZaZlJMZ0hPQmlQWThJNFFXV3M3ZVNjam94ZUtnaGxvWEN1SjNuTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoidit2UFRnTWFKS2J6VjdGYnZwS3VlNkt4MnFjd3JWVThlZ252RGZVTmJTSEFjZS81NDZSa3h4c0J2NlVvQUlLYXN3MkJCUytEVDFvZFFrcFdlaUpxQ1E9PSIsImRldmljZVNpZ25hdHVyZSI6IitXdWlJbHozQXR3SEdzOGFoWnh6b05sUjBhZ0NmVkIvUlI2M0Q0eWdXaVo5ZTQ4YzVEOGlQWnZFcDRMM3NuSXVSR0VKZmt0M2dVY3cxN2k1M2ZSS2hnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjA4MzU1NzA6MjlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVWR3eXIyWDBTNEJ6Z1lqMlBDT0VGbHJPM2tuSTZNWGlvSVphRndyaWQ1eiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FzSUNRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUwNTM1NTM0LCJsYXN0UHJvcEhhc2giOiJQV2s1QiJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94760835570",
  PASSWORD: 
    process.env.PASSWORD || "Chamindu2008",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94760835570", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
