module.exports = {
  'Test Simple Video Player' : function (client) {
    client
      .url('localhost:3000')
      .waitForElementVisible('body', 1000)
      .assert.visible('button')
      .assert.visible('video')
      .assert.visible('span.simple_video_player-percentage')
      .assert.visible('span.simple_video_player-duration')
      .assert.visible('span.simple_video_player-current-time')
      .assert.containsText("button.simple_video_player-button", "play")
      .assert.containsText("span.simple_video_player-percentage", "0")
      .assert.containsText("span.simple_video_player-duration", "0")
      .assert.containsText("span.simple_video_player-current-time", "0")
      .click("button.simple_video_player-button")
      .pause(3000)
      .assert.containsText("button.simple_video_player-button", "pause")
      .click("button.simple_video_player-button")
      .pause(3000)
      .assert.containsText("button.simple_video_player-button", "play")
      .click("button.simple_video_player-button")
      .pause(3000)
      .assert.containsText("button.simple_video_player-button", "pause")
      .pause(58000)
      .assert.containsText("button.simple_video_player-button", "replay")
      .assert.containsText("span.simple_video_player-percentage", "100")
      .assert.containsText("span.simple_video_player-duration", "60")
      .assert.containsText("span.simple_video_player-current-time", "60")
      .end();
  }
};
