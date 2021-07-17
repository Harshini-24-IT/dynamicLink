const express = require("express");
const moment = require("moment");
const app = express();

// app.route('/g1').get((req,res) => {
//     res.redirect(classurl1)
// })
let nowtime = moment();

nowtime = moment();
summa = moment("08:25", "h:mm a");

console.log(moment("01:45 pm", "h:mm a").format("hh:mm a"));

let classurl = null;

app.route("/g2").get((req, res) => {
  switch (nowtime.day()) {
    case 0:

    case 1:
      if (
        nowtime.isBetween(moment("08:25", "h:mm a"), moment("09:30", "h:mm a"))
      ) {
        return res.status(301).redirect("https://www.netflix.com");
      } else if (
        nowtime.isBetween(moment("09:40", "h:mm a"), moment("10:45", "h:mm a"))
      ) {
        return res.status(301).redirect("https://ww.geoguessr.com");
      } else if (
        nowtime.isBetween(
          moment("10:55", "h:mm a"),
          moment("12:00 pm", "h:mm a")
        )
      ) {
        return res.status(301).redirect("https://www.google.com");
      } else if (
        nowtime.isBetween(
          moment("01:40 pm", "h:mm a"),
          moment("02:45 pm", "h:mm a")
        )
      ) {
        return res.status(301).redirect("https://www.canva.com");
      } else if (
        nowtime.isBetween(
          moment("02:55 pm", "h:mm a"),
          moment("04:00 pm", "h:mm a")
        )
      ) {
        return res.redirect("https://www.instagram.com");
      } else {
        return res.send(
          "innum time irruku aprm va(still there is time come back later)"
        );
      }

    case 2:
      if (
        nowtime.isBetween(moment("08:25", "h:mm a"), moment("09:30", "h:mm a"))
      ) {
        return res.status(301).redirect("https://www.netflix.com");
      } else if (
        nowtime.isBetween(moment("09:40", "h:mm a"), moment("10:45", "h:mm a"))
      ) {
        return res.status(301).redirect("https://ww.geoguessr.com");
      } else if (
        nowtime.isBetween(
          moment("10:55", "h:mm a"),
          moment("12:00 pm", "h:mm a")
        )
      ) {
        return res.status(301).redirect("https://www.google.com");
      } else if (
        nowtime.isBetween(
          moment("01:40 pm", "h:mm a"),
          moment("02:45 pm", "h:mm a")
        )
      ) {
        return res.status(301).redirect("https://www.canva.com");
      } else if (
        nowtime.isBetween(
          moment("02:55 pm", "h:mm a"),
          moment("04:00 pm", "h:mm a")
        )
      ) {
        return res.redirect("https://www.instagram.com");
      } else {
        return res.send(
          "innum time irruku aprm va(still there is time come back later)"
        );
      }

    case 3:
      if (
        nowtime.isBetween(moment("08:25", "h:mm a"), moment("09:30", "h:mm a"))
      ) {
        return res.status(301).redirect("https://www.netflix.com");
      } else if (
        nowtime.isBetween(moment("09:40", "h:mm a"), moment("10:45", "h:mm a"))
      ) {
        return res.status(301).redirect("https://ww.geoguessr.com");
      } else if (
        nowtime.isBetween(
          moment("10:55", "h:mm a"),
          moment("12:00 pm", "h:mm a")
        )
      ) {
        return res.status(301).redirect("https://www.google.com");
      } else if (
        nowtime.isBetween(
          moment("01:40 pm", "h:mm a"),
          moment("02:45 pm", "h:mm a")
        )
      ) {
        return res.status(301).redirect("https://www.canva.com");
      } else if (
        nowtime.isBetween(
          moment("02:55 pm", "h:mm a"),
          moment("04:00 pm", "h:mm a")
        )
      ) {
        return res.redirect("https://www.instagram.com");
      } else {
        return res.send(
          "innum time irruku aprm va(still there is time come back later)"
        );
      }

    case 4:
      if (
        nowtime.isBetween(moment("08:25", "h:mm a"), moment("09:30", "h:mm a"))
      ) {
        return res.status(301).redirect("https://www.netflix.com");
      } else if (
        nowtime.isBetween(moment("09:40", "h:mm a"), moment("10:45", "h:mm a"))
      ) {
        return res.status(301).redirect("https://ww.geoguessr.com");
      } else if (
        nowtime.isBetween(
          moment("10:55", "h:mm a"),
          moment("12:00 pm", "h:mm a")
        )
      ) {
        return res.status(301).redirect("https://www.google.com");
      } else if (
        nowtime.isBetween(
          moment("01:40 pm", "h:mm a"),
          moment("02:45 pm", "h:mm a")
        )
      ) {
        return res.status(301).redirect("https://www.canva.com");
      } else if (
        nowtime.isBetween(
          moment("02:55 pm", "h:mm a"),
          moment("04:00 pm", "h:mm a")
        )
      ) {
        return res.redirect("https://www.instagram.com");
      } else {
        return res.send(
          "innum time irruku aprm va(still there is time come back later)"
        );
      }

    case 5:
      if (
        nowtime.isBetween(moment("08:25", "h:mm a"), moment("09:30", "h:mm a"))
      ) {
        return res.status(301).redirect("https://www.netflix.com");
      } else if (
        nowtime.isBetween(moment("09:40", "h:mm a"), moment("10:45", "h:mm a"))
      ) {
        return res.status(301).redirect("https://ww.geoguessr.com");
      } else if (
        nowtime.isBetween(
          moment("10:55", "h:mm a"),
          moment("12:00 pm", "h:mm a")
        )
      ) {
        return res.status(301).redirect("https://www.google.com");
      } else if (
        nowtime.isBetween(
          moment("01:40 pm", "h:mm a"),
          moment("02:45 pm", "h:mm a")
        )
      ) {
        return res.status(301).redirect("https://www.canva.com");
      } else if (
        nowtime.isBetween(
          moment("02:55 pm", "h:mm a"),
          moment("04:00 pm", "h:mm a")
        )
      ) {
        return res.redirect("https://www.instagram.com");
      } else {
        return res.send(
          "innum time irruku aprm va(still there is time come back later)"
        );
      }

    case 6:
      if (
        nowtime.isBetween(moment("08:25", "h:mm a"), moment("09:30", "h:mm a"))
      ) {
        return res.status(301).redirect("https://www.netflix.com");
      } else if (
        nowtime.isBetween(moment("09:40", "h:mm a"), moment("10:45", "h:mm a"))
      ) {
        return res.status(301).redirect("https://ww.geoguessr.com");
      } else if (
        nowtime.isBetween(
          moment("10:55", "h:mm a"),
          moment("12:00 pm", "h:mm a")
        )
      ) {
        return res.status(301).redirect("https://www.google.com");
      } else if (
        nowtime.isBetween(
          moment("01:40 pm", "h:mm a"),
          moment("02:45 pm", "h:mm a")
        )
      ) {
        return res.status(301).redirect("https://www.canva.com");
      } else if (
        nowtime.isBetween(
          moment("02:55 pm", "h:mm a"),
          moment("04:00 pm", "h:mm a")
        )
      ) {
        return res.redirect("https://www.instagram.com");
      } else {
        return res.send(
          "innum time irruku aprm va(still there is time come back later)"
        );
      }
  }
});

app.listen(3000);
