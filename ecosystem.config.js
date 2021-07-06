module.exports = {
  apps: [
    {
      name: "fuse-webhooks-bot",
      script: "npm",
      args: "run start",
      cron_restart: "0 * * * *" // Restart every hour.
    }
  ]
};
