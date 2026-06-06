const LeagueMonitor = require('../services/LeagueMonitor');

module.exports = {
  name: 'ready',
  once: true,
  async execute(client) {
    console.log('✅ System ready event fired: initializing RSA Operations Centre');

    try {
      const leagueMonitor = new LeagueMonitor(client);
      await leagueMonitor.initialize();
      client.leagueMonitor = leagueMonitor;
      console.log('✅ LeagueMonitor initialized successfully');
    } catch (error) {
      console.error('❌ LeagueMonitor failed to initialize:', error);
    }
  },
};
