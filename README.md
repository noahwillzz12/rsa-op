# RSA Roster Management System

Complete Discord.js v14 bot for managing Roblox Soccer Association (RSA) national team rosters.

---

## 📋 Features

✅ **16 Official RSA National Teams** - Pre-configured with all teams  
✅ **JSON-Based Storage** - teams.json for persistent data  
✅ **Slash Commands** - `/roster` command with team selection  
✅ **Team Logos** - Embedded PNG images for each team  
✅ **Roster Management** - Add/remove players, track squad sizes  
✅ **Production-Ready** - Comprehensive error handling & async operations  
✅ **Discord.js v14** - Using latest API (SlashCommandBuilder, EmbedBuilder, AttachmentBuilder)  

---

## 🛠 Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create `.env` file:

```env
DISCORD_TOKEN=your_bot_token_here
```

### 3. Team Logos

Place PNG files in the `assets/` folder:

```
assets/
  ├── usa.png
  ├── sweden.png
  ├── spain.png
  ├── japan.png
  ├── belgium.png
  ├── turkiye.png
  ├── netherlands.png
  ├── germany.png
  ├── norway.png
  ├── senegal.png
  ├── morocco.png
  ├── croatia.png
  ├── ghana.png
  ├── brazil.png
  ├── england.png
  └── france.png
```

### 4. Run the Bot

```bash
npm start
```

---

## 📊 Teams

| Team | Code | Roster Limit |
|------|------|--------------|
| USA | USA | 16 |
| Sweden | SWE | 16 |
| Spain | ESP | 16 |
| Japan | JPN | 16 |
| Belgium | BEL | 16 |
| Türkiye | TUR | 16 |
| Netherlands | NED | 16 |
| Germany | GER | 16 |
| Norway | NOR | 16 |
| Senegal | SEN | 16 |
| Morocco | MAR | 16 |
| Croatia | CRO | 16 |
| Ghana | GHA | 16 |
| Brazil | BRA | 16 |
| England | ENG | 16 |
| France | FRA | 16 |

---

## 📝 Teams Data (teams.json)

Each team object contains:

```json
{
  "teamName": "USA",
  "teamCode": "USA",
  "roleId": "1234567890",
  "logo": "./assets/usa.png",
  "coachDiscordId": "0",
  "coachRobloxId": "0",
  "rosterLimit": 16,
  "rosterPlayers": [
    {
      "playerId": "123456",
      "playerName": "Player Name",
      "joinedAt": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```

---

## 🎮 Commands

### `/roster`

View a national team's roster and player list.

**Usage:**
```
/roster team: [National Team]
```

**Response:**
- Team name & logo
- Coach information
- Current squad size vs. roster limit
- List of all rostered players
- Team code

---

## 🏗 Project Structure

```
RSA Assistant/
├── main.js              # Bot main file
├── teams.json           # Team data & roster storage
├── package.json         # Node.js dependencies
├── .env                 # Environment variables (not in repo)
├── assets/              # Team logo PNG files
│   ├── usa.png
│   ├── sweden.png
│   └── ...
└── README.md            # This file
```

---

## 💾 Data Management

### TeamRegistry Class

Handles all team and roster operations:

```javascript
// Load all teams from teams.json
await registry.loadTeams();

// Get team by name
const team = registry.getTeamByName("USA");

// Add player to roster
await registry.addPlayerToRoster("USA", "playerId", "playerName");

// Remove player from roster
await registry.removePlayerFromRoster("USA", "playerId");

// Save changes to teams.json
await registry.saveTeams();
```

---

## 🚀 Advanced Usage

### Adding a Player to a Roster

To programmatically add players:

```javascript
try {
  await registry.addPlayerToRoster("USA", "roblox_user_id", "Player Name");
  console.log("✅ Player added successfully");
} catch (error) {
  console.error("❌ Error:", error.message);
}
```

### Updating Coach Information

Edit `teams.json` directly:

```json
{
  "teamName": "USA",
  "coachDiscordId": "123456789",
  "coachRobloxId": "roblox_user_id",
  ...
}
```

### Checking Roster Space

```javascript
const team = registry.getTeamByName("USA");
const availableSlots = team.rosterLimit - team.rosterPlayers.length;
console.log(`Available slots: ${availableSlots}/16`);
```

---

## ⚙️ Configuration

### Change Roster Limit

Edit `teams.json`:

```json
{
  "rosterLimit": 20
}
```

### Change Role IDs

Update `roleId` in each team object in `teams.json`.

### Update Coach Information

Set `coachDiscordId` and `coachRobloxId` in teams.json:

```json
{
  "coachDiscordId": "Discord User ID",
  "coachRobloxId": "Roblox User ID"
}
```

---

## 🔧 Error Handling

The bot includes production-ready error handling:

- ✅ Missing environment variables
- ✅ Invalid team names
- ✅ Missing logo files
- ✅ Roster capacity checks
- ✅ Duplicate player detection
- ✅ File I/O errors
- ✅ Discord API errors

All errors are logged to console and displayed to users as embeds.

---

## 📦 Dependencies

- **discord.js** ^14.14.1 - Discord API wrapper
- **dotenv** ^16.3.1 - Environment variable management

---

## 📝 License

ISC

---

## 📞 Support

For issues or questions, check the main.js file for inline documentation.

**RSA | Roblox Soccer Association**
