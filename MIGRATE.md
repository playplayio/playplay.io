# Migrating from Slack-Gamebot

### Rename your Bot

Disable your current bot integration, stop your bot application.

### Register Team on PlayPlay.io

Go to [playplay.io](http://playplay.io) and register your team.

### Find the Database Config

```
$ heroku config --app=your-gamebot-instance
```

### Dump the Data

```
mongodump -u ... -p ... --host xyz.mongolab.com --port 33652 --db heroku_app123
```

Share the data dump with me, e-mail dblock[at]dblock[dot]org, mention your team name.

### Restore Data

I'll restore your data and attach it to your team.

```ruby
team = Team.find(...)
User.where(team: nil).update_all(team_id: team.id)
Challenge.where(team: nil).update_all(team_id: team.id)
Season.where(team: nil).update_all(team_id: team.id)
Match.where(team: nil).update_all(team_id: team.id)
```
