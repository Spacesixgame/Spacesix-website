export default function handler(req, res) {
  res.status(200).json({
    socials: [
      {
        name: "Twitter",
        link: "https://twitter.com/SpaceSixgame",
        image: "Twitter.png",
      },
      {
        name: "Telegram",
        link: "https://t.me/space6game",
        image: "Telegram.png",
      },
      {
        name: "Youtube",
        link: "https://www.youtube.com/channel/UCbQAd3QWLaBLmH7WR2HnMeg?sub_confirmation=1",
        image: "YouTube.png",
      },
      {
        name: "Medium",
        link: "https://spacesixgame.medium.com/",
        image: "Medium.png",
      },
      {
        name: "Discord",
        link: "https://discord.gg/YqNbWFK3jx",
        image: "Discord.png",
      },
    ],
  });
}
