module.exports = {
  apps: [
    {
      name: "syntravestcapital-frontend",
      script: "node_modules/.bin/next",
      args: "start",
      cwd: "/var/www/syntravestcapital/frontend_next",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "500M",
      env: {
        NODE_ENV: "production",
        PORT: 3001,
      },
    },
  ],
};
